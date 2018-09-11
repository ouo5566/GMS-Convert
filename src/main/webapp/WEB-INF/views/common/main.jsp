<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!doctype html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home</title>
	<meta name="description" content="Free Bootstrap Theme by BootstrapMade.com">
  	<meta name="keywords" content="free website templates, free bootstrap themes, free template, free bootstrap, free website template">
	
	<link rel="shortcut icon" href="${context}/resources/img/favicon.ico">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Satisfy|Bree+Serif|Candal|PT+Sans">
	<link rel="stylesheet" href="http://fonts.googleapis.com/earlyaccess/hanna.css">
	<link rel="stylesheet" href="${context}/resources/css/theme.css">
	<link rel="stylesheet" href="${context}/resources/css/font-awesome.min.css">
	<link rel="stylesheet" href="${context}/resources/css/style.css">
	
	<%-- <link rel="stylesheet" href="${context}/resources/board_resource/dist/css/skins/_all-skins.min.css"> --%>
<%-- 	<link rel="stylesheet" href="${context}/resources/board_resource/dist/css/AdminLTE.min.css"> --%>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="${context}/resources/js/custom.js"></script>
	<script src="${context}/resources/js/jquery.easing.min.js"></script>
	<%-- <script src="${context}/resources/js/app.js"></script> --%>
</head>
<body>
<div id="wrapper">
	<div id="header">
		<tiles:insertAttribute name="header"/>
	</div>
	<div id="content">
		<tiles:insertAttribute name="content"/>
	</div>
	<div id="footer">
		<tiles:insertAttribute name="footer"/>
	</div>
</div>
</body>
</html>