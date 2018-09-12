<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--banner-->
  <section id="banner">
    <div class="bg-color">
      <header id="header">
        <div class="container">
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> &times; </a>
            <a id="logout_btn">Logout</a>
            <a id="retrieve_move">Retrieve</a>
            <a id="update_move">Update</a>
            <a id="delete_move">Delete</a>
            <br />
            <a id="board_write">게시글쓰기</a>
            <a id="board_list">게시글목록</a>
          </div>
          <!-- Use any element to open the sidenav -->
          <span onclick="openNav()" class="pull-right menu-icon">☰</span>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="inner text-center">
            <h1 class="logo-name"> WELCOME </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- / banner -->
  <script>
	$('#logout_btn').click(function(){
		location.href = "${context}/member/logout";
	});
	$('#retrieve_move').click(function(){
		location.href = "${context}/member/retrieve";
	});
	$('#update_move').click(function(){
		location.href = "${context}/move/login/member/modify";
	});
	$('#delete_move').click(function(){
		location.href = "${context}/move/login/member/remove";
	});
	$('#board_write').click(function(){
		location.href = "${context}/move/public/board/modifyPage"
	});
	$('#board_list').click(function(){
		alert('LIST');
	});
  </script>