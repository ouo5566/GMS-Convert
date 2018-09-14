"use strict" //에러가 나면 보여주겠다.
var algo = algo || {};
algo = {
		init : x => {
			//alert('step 1 :: ' + x);
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate : x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
} // 호출하면 만들어진다. 
algo.main = {
		onCreate:()=>{
			//alert('step 4 :: ' + $.ctx());
			algo.main.setContentView();
		},
		setContentView : ()=>{
			$('#wrapper').html('<h1> ALGORITHM </h1>'
					+ '<h3> 수열 </h3>'
					+ '<div id="ctn"></div>'); // 오버라이딩
			$('#ctn').html(
					'<table id="tbl" style="width:800px;height:300px;'
					+ 'border-collapse:collapse;border: 1px solid black; margin:0 auto">'
					+ '<tr style="border:1px solid black;">'
					+ '<td id="td1" style="width:50%; border:1px solid black;"></td>'
					+ '<td id="td2" style="width:50%; border:1px solid black;"></td>'
					+ '</tr></table>');
			let $td1 = $('#td1');
			let $td2 = $('#td2');
			$('<ul />')
			.attr({id : 'side_menu'})
			.addClass('list_group')
			.appendTo($td1);
			$('<li/>')
			.attr({id : 'arith'})
			.addClass('list-group-item')
			.appendTo($('#side_menu'));
			$('<a/>')
			.attr({href : '#'})
			.html('등차수열의 합')
			.appendTo($('#arith'))
			.click(e=>{
				let ques = 	'<div id = "ques"><h3> 시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label>'
					+'	<input id="start" type="text" value=""></br>'
					+'	<label for="마지막값">마지막값</label>'
					+'	<input id="end" type="text" value=""></br>'
					+'	<label for="공차">공차</label>'
					+'	<input id="d" type="text" value=""></br>'
					+'	<button id="bt">결과보기</button>'
					+'	<h3 id="r"></h3></div>';
				
				$('<div/>')
				.attr({id : "ques"}).appendTo($td2);
				$('<h3/>')
				.html('시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.').appendTo($('#ques'));
				
				var i = 0;
				var arr = [{id:'start',label:'시작값'},
							{id:'end',label:'마지막값'},
							{id:'d',label:'공차'}];
				for(i in arr){
					$('<div/>')
					.attr({id : "temp_"+i}).appendTo($('#ques'));
					
					$('<label/>')
					.html(arr[i].label).appendTo($('#temp_'+i));
					$('<input/>')
					.attr({id : arr[i].id, type : 'text'}).appendTo($('#temp_'+i));
					$('</br>').appendTo($('#temp_'+i));
				}
				
				$('<button/>')
				.addClass('btn btn-primary')
				.attr({type:'button'})
				.html('결과보기')
				.click(e=>{
					
					let start = $('#start').val()*1;
					let end = $('#end').val()*1;
					let d = $('#d').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start,end,d]))?
									'빈칸을 채우세요'
									:'실행'		
							);
					if($('#r').text() === '실행'){
						console.log(start+"/"+end+"/"+d);
						let sum = 0;
						let i = 0;
						let a = start;
						while(i<end){
							sum = sum + a;
							a = a + d;
							i = i + 1;
						}
						$('#r').text("답 : "+sum);
						$('#start').prop('value',start);					
						$('#end').prop('value',end);					
						$('#d').prop('value',d);
					}
					
				}
				).appendTo($('#ques'));
				$('<h3/>')
				.attr({id : 'r'}).appendTo($('#ques'));
				
				/*
				$('<label/>')
				.html('시작값').appendTo($('#ques'));
				$('<input/>')
				.attr({id : 'start', type : 'text'}).appendTo($('#ques'));
				$('</br>').appendTo($('#ques'));
				
				$('<label/>')
				.html('마지막값').appendTo($('#ques'));
				$('<input/>')
				.attr({id : 'end', type : 'text'}).appendTo($('#ques'));
				$('</br>').appendTo($('#ques'));
				$('<label/>')
				.html('공차').appendTo($('#ques'));
				$('<input/>')
				.attr({id : 'd', type : 'text'}).appendTo($('#ques'));
				$('</br>').appendTo($('#ques'));
				$('<button/>')
				.addClass('btn btn-primary')
				.attr({type:'button'})
				.html('결과보기')
				.click(e=>{
				}
				).appendTo($('#ques'));
				$('<h3/>')
				.attr({id : 'r'}).appendTo($('#ques'));
				*/
			}).appendTo();
		}
};
algo.series = {
		arith : x=>{},
		fibonacci : x=>{},
		swit : x=>{},
		factorial : x=>{}
};
algo.array = {
		bubble : x=>{},
		insert : x=>{},
		select : x=>{},
		ranking : x=>{}
};
algo.matrix = {
		fByf : x=>{},
		sandGlass : x=>{},
		snail : x=>{},
		diamond : x=>{},
		zigzag : x=>{}
};
algo.math = {};
algo.appl = {};

algo.router = {
	onCreate : x=>{
		//alert('step 2 :: ' + x);
		$.getScript(x+'/resources/js/router.js',
			()=>{
					//alert('step 3 :: ' + x);
					$.extend(new Session(x)); // 확장
					$.getScript(x+'/resources/js/util.js')
					.done(()=>{console.log('성공');})
					.fail(()=>{console.log('실패');});
					algo.main.onCreate();
				}
			); // 외부의 js파일 호출, import 느낌
	}
};

/*
				
				$td2.html(ques);
				$('#bt').click(()=>{
					let start = $('#start').val()*1;
					let end = $('#end').val()*1;
					let d = $('#d').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start,end,d]))?
									'빈칸을 채우세요'
									:'실행'		
							);
					if($('#r').text() === '실행'){
						console.log(start+"/"+end+"/"+d);
						let sum = 0;
						let i = 0;
						let a = start;
						while(i<end){
							sum = sum + a;
							a = a + d;
							i = i + 1;
						}
						$('#r').text("답 : "+sum);
						$('#start').prop('value',start);					
						$('#end').prop('value',end);					
						$('#d').prop('value',d);	
					}
			});
		
			$('#td1').html('<a id="arith"> 등차수열 </a> </br>');
			$('#td1').append('<a id="fibonacci"> 피보나치 </a> </br>'
							+ '<a id="swit"> 스위치수열 </a> </br>'
							+ '<a id="factorial"> 팩토리얼 </a> </br>'); // 오버로딩
			$('#arith').click(e=>{
				alert('등차수열 선택');
				let ques = 	'<h3> 시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label>'
					+'	<input id="start" type="text" value=""></br>'
					+'	<label for="마지막값">마지막값</label>'
					+'	<input id="end" type="text" value=""></br>'
					+'	<label for="공차">공차</label>'
					+'	<input id="d" type="text" value=""></br>'
					+'	<button id="bt">결과보기</button>'
					+'	<h3 id="r"></h3>';
				$('#td2').html(ques);
				$('#bt').click(()=>{
					let start = $('#start').val()*1;
					let end = $('#end').val()*1;
					let d = $('#d').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start,end,d]))?
									'빈칸을 채우세요'
									:'실행'		
							);
					if($('#r').text() === '실행'){
						console.log(start+"/"+end+"/"+d);
						let sum = 0;
						let i = 0;
						let a = start;
						while(i<end){
							sum = sum + a;
							a = a + d;
							i = i + 1;
						}
						$('#r').text("답 : "+sum);
						$('#start').prop('value',start);					
						$('#end').prop('value',end);					
						$('#d').prop('value',d);	
					}
				});
			});
			$('#fibonacci').click(e=>{
				alert('피보나치 선택');
				let ques = '<h3>1 + 1 + 2 + 3 + 5 + 8 + ...  와 같은 피보나치 수열의 N항까지의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label>'
					+'	<input id="start" type="text" value=""></br>'
					+'	<label for="n항">n항</label>'
					+'	<input id="end" type="text" value=""></br>'
					+'	<button id="bt">결과보기</button>';
				$('#td2').html(ques).append('<h3 id="r"></h3>');
				$('#bt').click(()=>{
					let start = $('#start').val()*1;
					let end = $('#end').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start, end]))?
									'빈칸을 채우세요':"실행"
					);
					if($('#r').text() === '실행'){
						let i = start;
						let j = i;
						let k = 0;
						let sum = i + j;
						let cnt = 3;
						while(cnt <= end){
							k = i + j;
							sum = sum + k;
							i = j;
							j = k;
							cnt = cnt + 1;
						}
						$('#r').text("답 : "+sum);
						$('#start').prop('value',start);					
						$('#end').prop('value',end);	
					}
				});
			});
			$('#swit').click(e=>{
				alert('스위치수열 선택');
				let ques = '<h3>1 - 2 + 3 - 4 + ... + 99 - 100  의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label>'
					+'	<input id="start" type="text" value=""></br>'
					+'	<label for="마지막값">마지막값</label>'
					+'	<input id="end" type="text" value=""></br>'
					+'	<button id="bt">결과보기</button>';
				$('#td2').html(ques).append('<h3 id="r"></h3>');
				$('#bt').click(()=>{
					let start = $('#start').val()*1;
					let end = $('#end').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start, end]))?
									'빈칸을 채우세요':"실행"
					);
					if($('#r').text() === '실행'){
						
					}
				});
			});
			$('#factorial').click(e=>{
				alert('팩토리얼 선택');
			});
			*/
 