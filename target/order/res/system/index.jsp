<%--
  User: fenghui
  Date: 2016/07/06
  Time: 10:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="order">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <%--<link rel="stylesheet" type="text/css" href="/res/mobi/css/main.css"/>--%>
    <%--<link rel="stylesheet" type="text/css" href="/res/mobi/css/page.css"/>--%>
    <link rel="stylesheet" type="text/css" href="/res/system/js/libs/jquery/swiper-3.3.1.min.css"/>
    <title ng-bind="newTitle" style="text-align: center"></title>
</head>
<body ng-controller="indexController as index">


<div class="main" ui-view>

</div>

<!--js-->
<script src="/res/system/js/libs/jquery/2.1.4/jquery.js"></script>
<script src="/res/system/js/libs/bootstrap/3.3.5/bootstrap.min.js"></script>
<script src="/res/system/js/libs/angular.js/1.4.6/angular.js"></script>
<script src="/res/system/js/libs/angular.js/1.4.6/angular-cookies.min.js"></script>
<script src="/res/system/js/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
<script src="/res/system/js/libs/jquery/1.10.4/jquery-ui.min.js"></script>
<script src="/res/system/js/libs/ionic/js/ionic.bundle.js"></script>
<script src="/res/system/js/libs/ocLazyLoad/ocLazyLoad.js"></script>



<script src="/res/system/js/order.js"></script>
<script src="/res/system/js/route/index.router.js"></script>
<script src="/res/system/js/controller/index.controller.js"></script>

</body>
</html>
