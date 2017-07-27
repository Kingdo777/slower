<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: ice_q
  Date: 2017/7/27
  Time: 16:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>浏览历史</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maxinum-scale=1,width=device-width">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/plugins/font-awesome/css/font-awesome.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/component/default.css"/>">
    <link type="text/css" rel="stylesheet" href="<c:url value="/static/user/history.css"/>">
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/jquery-3.2.1.min.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/plugins/template.js"/>"></script>
    <script type="text/javascript" rel="script" src="<c:url value="/static/user/history.js"/>"></script>
</head>
<body>
<div id="book-template" style="display: none;">
    <div class="book">
        <a href="<c:url value="/book/details/{{id}}"/>">
            <div class="cover">
                <img src="{{cover}}">
            </div>
            <div class="details">
                <div class="title">
                    {{title}}
                </div>
                <div class="summary">
                    {{summary}}
                </div>

                <div class="author">
                    {{author}}
                </div>
            </div>
        </a>
    </div>
</div>

<section id="book-list">

</section>
</body>
</html>
