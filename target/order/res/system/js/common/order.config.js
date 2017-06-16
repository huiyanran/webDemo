/**
 * 该文件由maven自动生成,请不要直接修改该配置文件,
 * 如需要修改，请到config/js/目录下修改对应的文件
 *
 * Created by fenghui on 2016/3/16.
 */

//配置微信公共常量
(function () {
    angular.module('order.config', [])
        .constant('odConfig', odConfig());    //常量,注入

    function odConfig() {
        var config = {
            mbUrl: "",
            resUrl: "http://lres.fanso2o.com",
            common: {
                controllerPath: "/res/system/js/controller",
                viewPath: "/res/system/js/view"

            }
        };

        return config;
    }
})();
