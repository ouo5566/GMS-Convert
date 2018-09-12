"use strict" //에러가 나면 보여주겠다.
var app = app || {};
var user = user || {};
app = {
		init : x=>{
			console.log('step 1');
			app.session.context(x);	
			app.onCreate();
		},
		onCreate : ()=>{
			console.log('step 3');
			app.setContentView();
			
			$('#login_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/login";
			});
			$('#add_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/add";
			});
			$('#login_form_btn').click(()=>{
				$('#login-form')
					.attr({ action : app.x()+"/member/login",
							method : "POST"})
					.submit();
			});
			$('#add_form_btn').click(()=>{
				/*
				var form = document.getElementById('join-form');
				form.action = app.x() + "/member/add";
				form.method = "post";	
				form.submit();
				*/
				$('#join-form')
					.attr({	action : app.x() + "/member/add",
							method : "POST"	})
					.submit(); // 메소드체이닝
			});
			$('#logout_btn').click(()=>{
				location.href = app.x()+"/member/logout";
			});
			$('#retrieve_move').click(()=>{
				location.href = app.x()+"/member/retrieve/"+app.session.getItem('memberId');
			});
			$('#update_move').click(()=>{
				location.href = app.x()+"/move/login/member/modify";
			});
			$('#delete_move').click(()=>{
				location.href = app.x()+"/move/login/member/remove";
			});
			$('#update_btn').click(()=>{
				let id = $('<input type="hidden" name="memberId" value="'+$('#memberId').text()+'"/>');
				$('#update-form')
					.append(id)
					.attr({ action : app.x() + "/member/modify",
							method : "POST"})
					.submit();
			});
			$('#delete_btn').click(()=>{
				let id = $('<input type="hidden" name="memberId" value="'+$('#memberId').text()+'"/>');
				$('#update-form')
					.append(id)
					.attr({ action : app.x() + "/member/remove",
							method : "POST"})
					.submit();
			});
			
			$('#memberId').text(app.session.getItem('memberId'));
			$('#name').text(app.session.getItem('name'));
			$('#age').text(app.session.getItem('age'));
			$('#ssn').text(app.session.getItem('ssn'));
			$('#gender').text(app.session.getItem('gender'));
			$('#teamId').val(app.session.getItem('teamId')).prop('selected',true);
			$('#roll').val(app.session.getItem('roll')).prop('selected',true);
			
		},
		setContentView : ()=>{
			console.log('step 4'+app.j());
			
		}
};


user.session = x =>{
	var s = '';
	$.each(x, function(k, v){
		s += 'key : '+k+' / value : '+v+'\n';
		sessionStorage.setItem(k, v);
	});
	alert(s);
}
