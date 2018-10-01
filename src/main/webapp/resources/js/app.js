"use strict" //에러가 나면 보여주겠다.
var app = app || {};

/*
var user = user || {};
user.session = x =>{
	var s = '';
	$.each(x, function(k, v){
		s += 'key : '+k+' / value : '+v+'\n';
		sessionStorage.setItem(k, v);
	});
	alert(s);
}*/

app =(()=>{
	var init =x=>{
		//변수 초기화
		//console.log('step 1');
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
		//console.log('step 2');
		app.router.home();
/*		$.getScript(header,()=>{
			w.html(headerUI());
		})	
*/
		
	};
	return {init:init};
})();
app.board = (()=>{
	var header, footer, content, ctx, script, style, img;
	var init=()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		// list
		app.service.boards(1);
	};
	return{init:init};
})();
app.permission = (()=>{
	var login =x=>{
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/login.js',()=>{
				$('#content').html(loginUI());
				$('<nav/>').appendTo($('#login-box'));
				ui.btn({txt : 'LOGIN', clazz : 'btn btn-secondary'})
				.appendTo($('#login-box'))
				.click(e=>{
					if(!$.fn.nullChecker([$('#memberId').val(), $('#pw').val()])){
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
									$('<a/>').attr({href:"#"}).html('Logout').appendTo($('#mySidenav')).click(e=>{
										app.router.home();
									});
									$('<a/>').attr({href:"#"}).html('Retrieve').appendTo($('#mySidenav')).click(e=>{});
									$('<a/>').attr({href:"#"}).html('Update').appendTo($('#mySidenav')).click(e=>{});
									$('<a/>').attr({href:"#"}).html('Delete').appendTo($('#mySidenav')).click(e=>{});
									$('<a/>').attr({href:"#"}).html('MyBoard').appendTo($('#mySidenav')).click(e=>{
										app.service.my_board({
											id : d.member.memberId,
											pageNo : 1
										});
									});
								}
							},
							error : (x,y,z)=>{console.log('error :: '+z)}
						});
					}
				});
			});
		});
	};
	var add =()=>{
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/add.js', ()=>{
				$('#content').html(addUI());
				/*
				== change event == 
				$('[name=subject]')
				.change(function(){
					console.log($(this).val());
				});
				*/
				
				ui.btn({txt : 'JOIN', clazz : 'btn btn-secondary'})
				.appendTo($('#add-box'))
				.click(e=>{
					
					let arr = [];
					let ckSub = $('[name=subject]:checked');
					for(let i of ckSub){
						arr.push(i.value);
					}
					
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
							subject:JSON.stringify(arr)
						}),
						success:d=>{console.log('JOIN SUCCESS :: '+d.memberId)},
						error:(x,y,z)=>{console.log('error :: '+z)}
					});
				});
			})
		})
	};
	return{
		login:login,
		add:add
		};
})();
app.service = {
		boards : x=>{
			$('#content').empty();
			$.getJSON($.ctx()+'/boards/'+x,d=>{
				$.getScript($.script()+'/compo.js',()=>{
					// no, 제목, 내용, 작성자, 조회수
					ui.tbl({
						type : 'warning',
						id : 'table',
						clazz : 'table table-bordered',
						head : 'PANEL-HEADING',
						body : 'PANEL-BODY',
						list : ['NO.', '제목', '내용', '작성자', '작성일', '조회수']
					})
					.appendTo($('#content'));
					
					$.each(d.list, (i, j)=>{
						$('<tr/>')
						.append(
							$('<td/>').attr('width','5%').html(j.bno),
							$('<td/>').attr('width','10%').html($('<a/>').html(j.title).click(e=>{
								app.service.get({
									page : x,
									bno : j.bno	
								});
							})),
							$('<td/>').attr('width','50%').html($('<a/>').html(j.content)),
							$('<td/>').attr('width','10%').html($('<a/>').html(j.writer)),
							$('<td/>').attr('width','10%').html(j.regdate),
							$('<td/>').attr('width','5%').html(j.viewcnt)
						)
						.appendTo($('tbody'));
					});
					
					ui.div({})
					.addClass('text-center')
					.append(ui.page({}))
					.appendTo($('#content'));
					
					let z = d.page;
					let ul = $('.pagination');
					let prev = (z.prevPage)?'':'disabled';
					let next = (z.nextPage)?'':'disabled';
					let begin = z.beginPage - 1;
					let end = z.endPage + 1;
					for(let i=begin; i<=end;i++){
						let c = (i == x) ? 'active' : 
									(i == begin) ? prev : 
										(i == end) ? next : '';
						$('<li/>')
						.addClass('page-item '+c)
						.append(
								$('<a/>')
								.attr('style','cursor:pointer')
								.addClass('page-link')
								.html(
										(i == begin)
											? 'Prev' : (i == end)
															? 'Next' : i
									)
						).appendTo(ul)
						.click(function(e){
							e.preventDefault();
							if(i != begin && i != end){
								$('li').removeClass('active');
								$(this).addClass('active');
							}
							app.service.boards(i);
						});
						$('.disabled').off();
					}
					
					$('<div/>')
					.attr({id : 'btn-box'})
					.appendTo($('#content .panel'));
					$('<button/>')
					.addClass('btn btn-secondary')
					.html('WRITE')
					.appendTo($('#btn-box'))
					.click(e=>{
						app.service.write(x);
					});
				});
			});
			
			
		},
		my_board : x=>{
			$('#content').empty();
			$.getJSON($.ctx()+'/boards/'+x.id+'/'+x.pageNo, d=>{
				$.getScript($.script()+'/compo.js',()=>{
					// no, 제목, 내용, 작성자, 조회수
					ui.tbl({
						type : 'warning',
						id : 'table',
						clazz : 'table table-bordered',
						head : 'PANEL-HEADING',
						body : 'PANEL-BODY',
						list : ['NO.', '제목', '내용', '작성자', '작성일', '조회수']
					})
					.appendTo($('#content'));
					
					$.each(d.list, (i, j)=>{
						$('<tr/>')
						.append(
							$('<td/>').attr('width','5%').html(j.bno),
							$('<td/>').attr('width','10%').html($('<a/>').html(j.title)),
							$('<td/>').attr('width','50%').html(j.content),
							$('<td/>').attr('width','10%').html($('<a/>').html(j.writer)),
							$('<td/>').attr('width','10%').html(j.regdate),
							$('<td/>').attr('width','5%').html(j.viewcnt)
						)
						.appendTo($('tbody'));
					});
					
					ui.div({})
					.addClass('text-center')
					.append(ui.page({}))
					.appendTo($('#content'));
					
					let z = d.page;
					let ul = $('.pagination');
					let prev = (z.prevPage)?'':'disabled';
					let next = (z.nextPage)?'':'disabled';
					let begin = z.beginPage - 1;
					let end = z.endPage + 1;
					for(let i=begin; i<=end;i++){
						let c = (i == x) ? 'active' : 
									(i == begin) ? prev : 
										(i == end) ? next : '';
						$('<li/>')
						.addClass('page-item '+c)
						.append(
								$('<a/>')
								.attr('style','cursor:pointer')
								.addClass('page-link')
								.html(
										(i == begin)
											? 'Prev' : (i == end)
															? 'Next' : i
									)
						).appendTo(ul)
						.click(function(e){
							e.preventDefault();
							if(i != begin && i != end){
								$('li').removeClass('active');
								$(this).addClass('active');
							}
							app.service.my_board({
								id : x.id ,
								pageNo : i
							});
						});
						$('.disabled').off("click");
					}
					
					
					
				});
			});
		},
		write : x=>{
			$.getScript($.script()+'/writer.js',()=>{
				$('.panel-heading').empty().html('WRITE');
				$('#table').remove();
				$('#content div.text-center').remove();
				$('.panel-body').html(writerUI());
				$('#btn-box').empty();
				$('<button/>')
				.addClass('btn btn-secondary')
				.html('NEW')
				.appendTo($('#btn-box'))
				.click(e=>{
					app.service.write(x);
				});
				$('<button/>')
				.addClass('btn btn-warning')
				.html('CANCLE')
				.appendTo($('#btn-box'))
				.click(e=>{
					app.service.boards(x);
				});
				$('<button/>')
				.addClass('btn btn-primary')
				.html('SUBMIT')
				.appendTo($('#btn-box'))
				.click(e=>{
					$.ajax({
						url : $.ctx()+'/boards/new',
						method : 'POST',
						contentType : 'application/json',
						data : JSON.stringify({
							title : $('#title').val(),
							content : $('#ctn').val(),
							writer : $('#writer').val()
						}),
						success : d=>{
							app.service.boards(1);
						},
						error : (x,y,z)=>{}
					});
				});
			})
		},
		get : x=>{
			$.getScript($.script()+'/reader.js',()=>{
				$.getJSON($.ctx()+'/boards/get/'+x.bno, d=>{
					$('.panel-heading').empty().html(d.bno);
					$('#table').remove();
					$('#content div.text-center').remove();
					$('.panel-body').html(readerUI());
					$('#title').html(d.title);
					$('#cnt').html(d.content);
					$('#writer').html(d.writer);
					$('#btn-box')
					.empty()
					.append(
						$('<button/>').addClass('btn btn-secondary').html('WRITE').appendTo($('#btn-box'))
						.click(e=>{
							app.service.write(x.page);
						}),	
						$('<button/>').addClass('btn btn-warning').html('MODIFY')
						.click(e=>{
							$.getScript($.script()+'/modify.js',()=>{
								$('.panel-body').html(modifyUI());
								$('#title').attr('value',d.title);
								$('#ctn').html(d.content);
								$('#writer').html(d.writer);
								$('#btn-box').empty();
								$('<button/>').addClass('btn btn-primary').html('SAVE').appendTo($('#btn-box'))
								.click(e=>{
									$.ajax({
										url : $.ctx()+'/boards/put',
										method : 'post',
										contentType : 'application/json',
										data : JSON.stringify({
											bno : d.bno,
											title : $('#title').val(),
											content : $('#ctn').val()
										}),
										success : d=>{
											app.service.get(x);
										},
										error : (x,y,z)=>{}
									});
								}),
								$('<button/>')
								.addClass('btn btn-warning')
								.html('CANCLE')
								.appendTo($('#btn-box'))
								.click(e=>{
									app.service.get(x);
								});
							})
						}),
						$('<button/>').addClass('btn btn-danger').html('REMOVE')
						.click(e=>{
							let conf = confirm("게시글을 삭제합니다.");
							if(conf == true){
								$.getJSON($.ctx()+'/boards/delete/'+x.bno);
								app.service.boards(x.page);
							}
						}),
						$('<button/>').addClass('btn btn-primary').html('LIST')
						.click(e=>{
							app.service.boards(x.page);
						})
					);
				})
			})
		}
};
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
		},
		home : ()=>{
			$.when(
					$.getScript($.script()+'/header.js'),
					$.getScript($.script()+'/content.js'),
					$.getScript($.script()+'/footer.js'),
					$.Deferred(x=>{
						$(x.resolve);
						//console.log('step 3');
					})
			).done(x=>{
				//console.log('step 4');
				$('#wrapper').html(headerUI()
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
			}).fail(x=>{console.log('step 4 실패')})
		}
	};