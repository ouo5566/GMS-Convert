<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content-box">
	<form id="join-form">
		<h3>JOIN PAGE</h3>
		ID : <input type="text" name="memberId" required/><br>
		PW : <input type="text" name="pw" required/><br>
		NAME : <input type="text" name="name" required/><br>
		SSN : <input type="text" name="ssn" required/><br>	
		소속팀
		<input type="radio" name="teamId" value="" checked="checked"/>NONE
		<input type="radio" name="teamId" value="NOLJA"/>NOLJA
		<input type="radio" name="teamId" value="JIEUN_HOUSE"/>JIEUN-HOUSE
		<input type="radio" name="teamId" value="TURTLE_KING"/>TURTLE-KING
		<input type="radio" name="teamId" value="CODDING_ZZANG"/>CODDING-ZZANG<br>
		프로젝트역할
		<select name="roll" id="roll">
			<option value="leader">팀장</option>
			<option value="front">프론트개발</option>
			<option value="back">백단개발</option>
			<option value="android">안드로이드개발</option>
		</select><br>
		수강과목
		<input type="checkbox" name="subject" value="java" checked="checked"/>Java
		<input type="checkbox" name="subject" value="c-lang"/>C언어
		<input type="checkbox" name="subject" value="JSP"/>JSP
		<input type="checkbox" name="subject" value="PHP"/>PHP
		<input type="checkbox" name="subject" value="node-js"/>NodeJS
		<input type="checkbox" name="subject" value="linux"/>Linux
		<input type="checkbox" name="subject" value="html"/>HTML
		<input type="checkbox" name="subject" value="spring"/>Spring<br>
		<input id="add_form_btn" type="button" value="JOIN" />
	</form>
</div>
<script>
$('#add_form_btn').click(function(){
	/*
	var form = document.getElementById('join-form');
	form.action = app.x() + "/member/add";
	form.method = "post";	
	form.submit();
	*/
	$('#join-form')
		.attr({	action : "${context}/member/add",
				method : "POST"	})
		.submit(); // 메소드체이닝
});
</script>