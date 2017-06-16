/**
 * Created by Rongjie on 2016/3/25.
 */
//判断CDN加载资源是否成功，不成功则加载本地资源
//(function(){
//    if(!angular&&!window.angular){
//        document.write('<script src="/res/wechat/content/js/angular.1.4.6.min.js"></script>');
//    }
//    if(!ui.router){
//        document.write('<script src="/res/wechat/content/js/angular.ui.router.min.0.2.15.js"></script>')
//    }
//})(angular)

//统一入口
var order = angular.module("order", ['ngCookies', 'ui.router', 'ionic', 'oc.lazyLoad']);


//通用消息处理
order.service("mbCommonService", commonService);
commonService.$inject = ['$ionicLoading']
function commonService($ionicLoading) {
    var vm = this;
    vm.show = showFn;

    function showFn(message, duration) {
        if (duration == undefined) {
            duration = 1000;
        }
        $ionicLoading.show({
            template: message,
            duration: duration,
            noBackdrop: true
        });
        LogUtils.trace(message);
    }

}

//增加依赖方法
order.importPack = importPackFn;
function importPackFn(moduleAndPath, moduleName) {
    //判断是否是URL
    function isUrl(s) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    }

    var resUrl = "/res/system";
    var modName;
    if (moduleName == null) {
        var moduleFileName = moduleAndPath.substring(moduleAndPath.lastIndexOf('/') + 1);
        modName = moduleFileName.substring(0, moduleFileName.lastIndexOf("."));
    } else {
        modName = moduleName;
    }

    if (isUrl(moduleAndPath)) {
        console.log("abs url, moduleName:" + modName);
        console.log("you need to add script in your jsp file:" + moduleAndPath);
        //$("body").prepend("<script  src='" + moduleAndPath + "'></script>");
    } else {
        console.log("moduleAndPath: " + moduleAndPath);
        $("body").append("<script defer async='true' src='" + resUrl + moduleAndPath + "'></script>");
    }
    if (order.requires.indexOf(moduleName) == -1) {
        //没有加载,则自动加载
        //console.log(modName);
        order.requires.push(modName);
    }
}

order.importPack('/js/common/order.config.js');
order.importPack('/js/dao/api.dao.js');

//统一日志管理
var LogUtils = function () {
    return {
        trace: function (data, flag) {
            flag ? console.log("===========" + flag + "===========") : null;
            console.log(data);
        }
    }
}();

(function () {
    //配置router全局调用参数
    order.run(routerGlobal);
    routerGlobal.$inject = ['$rootScope', 'odConfig', 'odApiDao'];
    function routerGlobal($rootScope, odConfig, odApiDao) {
        $rootScope.odConfig = odConfig;
        $rootScope.odApiDao = odApiDao;
    }

})();


order.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('myInterceptor');
}]);

order.factory('myInterceptor', ['$log', '$injector', '$q', function($log, $injector,$q) {
    $log.debug('$log is here to show you that this is a regular factory with injection');
    $log.debug("===================myInterceptor============================");
    var myInterceptor = {
        'responseError' : function(response) {
            if (response.status == 999) {
                var rootScope = $injector.get('$rootScope');
                //var state = $injector.get('$rootScope').$state.current.name;
                //rootScope.stateBeforLogin = state;
                //$log.debug(state);
                alert("请重新登陆！");
                rootScope.$state.go("login");
                return $q.reject(response);
            }
        }
    };
    return myInterceptor;
}]);