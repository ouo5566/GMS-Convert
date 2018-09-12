<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="content-box">
	<h2>◆Update◆</h2>
		<form id="update-form">
		<table id="mypage-table">
			<tr>
				<td id="mypage-img" rowspan="3" colspan="2">
					<img src="${img}${profile}" alt="" />
				</td>
				<td>ID</td>
				<td>${user.memberId}</td>
			</tr>
			<tr>
				<td>이름 </td>
				<td>${user.name}</td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td>
					<input type="password" name="pw"/>
				</td>
			</tr>
			<tr>
				<td>성별</td>
				<td>${user.gender}</td>
				<td>팀</td>
				<td>
					<select name="teamId" id="teamId">
						<option class="team-opt" value="NOLJA">NOLJA</option>
						<option class="team-opt" value="JIEUN_HOUSE">JIEUN-HOUSE</option>
						<option class="team-opt" value="TURTLE_KING">TURTLE-KING</option>
						<option class="team-opt" value="CODDING_ZZANG">CODDING-ZZANG</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>나이</td>
				<td>${user.age}</td>
				<td>역할</td>
				<td>
					<select name="roll" id="roll">
						<option class="roll-opt" value="leader">팀장</option>
						<option class="roll-opt" value="front">프론트개발</option>
						<option class="roll-opt" value="back">백단개발</option>
						<option class="roll-opt" value="android">안드로이드개발</option>
					</select>
				</td>
			</tr>
		</table>
		<input type="button" id="update_btn" value="UPDATE" />
		</form>
</div>
<form id="file-upload-form" >
	  파일 업로드: <input type="file" name="upfile"><br/>
	  <input class="form-butt" id="file-upload-btn" type="button" value="업로드">
</form>
<script>
$('#teamId').val('${user.teamId}').prop('selected',true);
$('#roll').val('${user.roll}').prop('selected',true);
$('#update_btn').click(function(){
	$('#update-form')
		.attr({ action : "${context}/member/modify",
				method : "POST"})
		.submit();
});
</script>