<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--banner-->
  <section id="banner">
    <div class="bg-color">
      <header id="header">
        <div class="container">
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> &times; </a>
            <a id="login_btn">Login</a>
            <a id="add_btn">Join</a>
          </div>
          <!-- Use any element to open the sidenav -->
          <span onclick="openNav()" class="pull-right menu-icon">☰</span>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="inner text-center">
            <h1 class="logo-name"> Grade Management System </h1>
            <h2>TAETAE</h2>
            <p>-v-</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- / banner -->
  <script>
	$('#login_btn').click(function(){
		location.href = "${context}/move/auth/member/login";
	});
	$('#add_btn').click(function(){
		location.href = "${context}/move/auth/member/add";
	});
  </script>