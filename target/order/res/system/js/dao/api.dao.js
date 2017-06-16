/**
 * Created by number on 2016/7/4.
 */
(function (){
    'use strict';
    angular.module('api.dao', ['order.config'])
        .service('odApiDao', odApiDao);

    odApiDao.$inject = ['$http', 'odConfig'];
    function odApiDao($http, odConfig) {
        var url = {
            user:{
                login: odConfig.mbUrl + "/user/login",
                isLogin: odConfig.mbUrl + "/user/isLogin",
                logout: odConfig.mbUrl + "/user/logout",
                register: odConfig.mbUrl + "/user/register",
                resetPass: odConfig.mbUrl + "/user/resetPassword",
                check: odConfig.mbUrl + '/user/check',
                sendRegisterCode: odConfig.mbUrl + '/user/sendRegisterCode',
                sendResetPasswordCode: odConfig.mbUrl + '/user/sendResetPasswordCode'
            },
            home:{
                infoList: odConfig.mbUrl + "/home/getInfoList",
                bossList: odConfig.mbUrl + "/home/getBossList"
            }
        };

        function getData(url, params){
            if(typeof params == "object"){
                return $http.get(url, {params: params});
            } else if (params != undefined){
                return $http.get(url + "/" + params);
            }else{
                return $http.get(url);
            }
        }

        function postData(url, params){
            var promise = null;
            if (typeof params == "object") {
                promise = $http({
                    'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
                    'method': 'POST',
                    'url': url,
                    'params': params
                });
            } else if (params != undefined) {
                promise = $http({
                    'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
                    'method': 'POST',
                    'url': url + "/" + params
                });
            } else {
                promise = $http({
                    'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
                    'method': 'POST',
                    'url': url
                });
            }

            return promise;
        }

        function postJsonData(url, params){
            return $http.post(url, {params: params});
        }

        function postFormData(url, params) {
            var fd = makeFormData(params);
            return $http({
                'method': 'POST',
                'url': url,
                'data': fd,
                'headers': {'Content-Type': undefined},
                'transformRequest': angular.identity
            });
        }

        //将json数据转换成formData
        function makeFormData(data){
            var fd = new FormData();
            angular.forEach(data, function(val, key){
                fd.append(key, val);
            });
            return fd;
        }

        return {
            url: url,
            getData: function(url, params){
                return getData(url, params);
            },
            postData: function(url, params){
                return postData(url, params);
            },
            postJsonData: function(url, params){
                return postJsonData(url, params);
            },
            postFormData: function(url, params){
                return postFormData(url, params);
            },
            makeFormData: function(data){
                return makeFormData(data);
            }
        }
    }
})();
