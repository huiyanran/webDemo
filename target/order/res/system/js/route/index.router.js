/**
 * Created by Rongjie on 2016/7/6.
 */
(function () {
    order.requires.push('ui.router');

    order.run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
    order.config(routerConfig);
    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$controllerProvider', 'odConfig'];

    function routerConfig($stateProvider, $urlRouterProvider, $controllerProvider, odConfig) {
        //动态添加Controller
        order.addController = $controllerProvider.register;
        //默认页
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', defineState("/home", "/home.tpl.html", "/home.controller.js"))  //首页

        ;

        /**
         *  定义路由配置
         * @param url : 路由路径
         * @param tplFile : 路由对应的模板,相对于dhConfig.common.viewPath定义的路径
         * @param ctrlFile: 路由对应的控制器, 相对于dhConfig.common.controllerPath定义的路径
         * @param cache : 是否缓存请求
         * @returns {{url: *, templateUrl: string, resolve: *}}
         */

        function defineState(url, tplFile, ctrlFile, cache) {
            if (tplFile == undefined) {
                tplFile = url + ".tpl.html";
            }
            if (ctrlFile == undefined) {
                ctrlFile = url + ".controller.js";
            }
            if (cache == undefined) {
                cache = true;
            }
            var stateConfig = {
                url: url,
                cache: cache,
                templateUrl: odConfig.common.viewPath + tplFile,
                resolve: resovleDep([odConfig.common.controllerPath + ctrlFile],
                    odConfig.common.viewPath + tplFile)
            };
            return stateConfig;
        }

        /**
         * 路由切换时调用
         * @param param.file 懒加载文件数组
         * @param tpl 子模块view视图
         * @param module 子模块名
         */
        function resovleDep(files, tpl, module) {
            if (module == undefined || module == null) {
                module = 'order';
            }
            var resolves = {
                loadMyCtrl: ['$ocLazyLoad', '$templateCache', '$q', function ($ocLazyLoad, $templateCache, $q) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name: module,
                        cache: true,
                        files: files
                    }).then(function () {
                        lazyDeferred.resolve($templateCache.get(tpl));
                    });
                }]
            };
            return resolves;
        };


    }
})();
