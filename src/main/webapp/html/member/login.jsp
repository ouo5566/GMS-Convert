<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content-box">
	<h3>LOGIN PAGE</h3>
	<form id="login-form">
		ID &nbsp;<input type="text" name="memberId"/> <br>
		PW <input type="text" name="pw"/>
		<input id="login_form_btn" type="button" value="LOGIN"/>
	</form>
</div>
<script>
$('#login_form_btn').click(function(){
	$('#login-form')
		.attr({ action : "${context}/member/login",
				method : "POST"})
		.submit();
});
</script>