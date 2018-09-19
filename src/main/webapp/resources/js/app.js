"use strict" //에러가 나면 보여주겠다.
var app = app || {};
var user = user || {};

/*app = (()=>{
	var init = x=>{
		
		app.session.context(x);	
		app.onCreate();
	};
	var onCreate = ()=>{
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
			
			var form = document.getElementById('join-form');
			form.action = app.x() + "/member/add";
			form.method = "post";	
			form.submit();
			
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
		
	};
	var setContentView = ()=>{
		console.log('step 4'+app.j());
		
	}
})();*/

user.session = x =>{
	var s = '';
	$.each(x, function(k, v){
		s += 'key : '+k+' / value : '+v+'\n';
		sessionStorage.setItem(k, v);
	});
	alert(s);
}
app =(()=>{
	var init =x=>{
		//변수 초기화
		console.log('step 1');
		app.router.init(x);
	};
	return{init:init};
})();
app.main=(()=>{
	var w, header, footer, content, ctx, script, style, img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		onCreate();
	};
	var onCreate =()=>{
		setContentView(); //화면구성(이벤트 걸기 전)
	};
	var setContentView =()=>{
		console.log('step 2');
		
/*		$.getScript(header,()=>{
			w.html(headerUI());
		})	
*/
		$.when(
				$.getScript(script+'/header.js'),
				$.getScript(script+'/content.js'),
				$.getScript(script+'/footer.js'),
				$.Deferred(x=>{
					$(x.resolve);
					console.log('step 3');
				})
		).done(x=>{
			console.log('step 4');
			w.html(headerUI()
					+ contentUI()
					+ footerUI());
			$('#login_btn').click(e=>{
				app.permission.login();
			})
			$('#add_btn').click(e=>{
				app.permission.add();
			})
			$('#board_btn').click(e=>{
				app.board.init();
			})
			}
		).fail(x=>{console.log('step 4 실패')})
	};
	return {init:init};
})();
app.board = (()=>{
	var w, header, footer, content, ctx, script, style, img;
	var init=()=>{
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		// list
		$('#content').empty();
	};
	return{init:init};
})();
app.permission = (()=>{
	var login =x=>{
		console.log('LOGIN');
		$.getScript($.script()+'/login.js',()=>{
			$('#content').html(loginUI());
			$('<button/>')
			.html('LOGIN')
			.appendTo($('#login-box'))
			.click(e=>{
				$.ajax({
					url : $.ctx()+'/mbr/login',
					method : 'post',
					contentType : 'application/json',
					data : JSON.stringify({ memberId : $('#memberId').val(), pw : $('#pw').val()}),
					success : d=>{
						$('#msg').remove();
						$('<p/>').attr('id','msg').html(d.flag).appendTo($('#login-box'));
						if(d.flag === 'login_success'){
							$('#content').empty();
							$('#mySidenav').empty();
							$('<a/>').attr({href:"#"}).html('Logout').appendTo($('#mySidenav')).click(e=>{});
							$('<a/>').attr({href:"#"}).html('Retrieve').appendTo($('#mySidenav')).click(e=>{});
							$('<a/>').attr({href:"#"}).html('Update').appendTo($('#mySidenav')).click(e=>{});
							$('<a/>').attr({href:"#"}).html('Delete').appendTo($('#mySidenav')).click(e=>{});
							$('<a/>').attr({href:"#"}).html('Board').appendTo($('#mySidenav')).click(e=>{});
						}
					},
					error : (x,y,z)=>{console.log('error :: '+z)}
				});
			});
		});
	};
	var add =()=>{
		console.log('ADD');
		$.getScript($.script()+'/add.js', ()=>{
			$('#content').html(addUI());
			//+'	<input id="add_form_btn" type="button" value="JOIN" />'
			$('<button/>')
			.html('JOIN')
			.appendTo($('#add-box'))
			.click(e=>{
				console.log($('[name=teamId]:checked').val());
				console.log($('[name=subject]:checked').length);
				$.ajax({
					url:$.ctx()+'/mbr/add',
					method:'post',
					contentType:'application/json',
					data:JSON.stringify({
						memberId:$('#memberId').val(),
						pw:$('#pw').val(),
						name:$('#name').val(),
						ssn:$('#ssn').val(),
						teamId:$('[name=teamId]:checked').val(),
						roll:$('#roll').val(),
						subject:''
							}),
					success:d=>{console.log('JOIN SUCCESS :: '+d.memberId)},
					error:(x,y,z)=>{console.log('error :: '+z)}
				});
			});
		})
	};
	return{
		login:login,
		add:add
		};
})();

app.router = {
		init : x=>{
			//alert('step 2 :: ' + x);
			$.getScript(x+'/resources/js/router.js',
				()=>{
						//alert('step 3 :: ' + x);
						$.extend(new Session(x)); // 확장
						$.getScript(x+'/resources/js/util.js')
						.done(()=>{console.log('성공');})
						.fail(()=>{console.log('실패');});
						app.main.init();
					}
				); // 외부의 js파일 호출, import 느낌
		}
	};