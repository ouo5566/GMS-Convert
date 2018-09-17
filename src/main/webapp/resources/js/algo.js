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
				$('#ques').remove();
				
/*				let ques = 	'<div id = "ques"><h3> 시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.</h3>'
					+'	<label for="시작값">시작값</label>'
					+'	<input id="start" type="text" value=""></br>'
					+'	<label for="마지막값">마지막값</label>'
					+'	<input id="end" type="text" value=""></br>'
					+'	<label for="공차">공차</label>'
					+'	<input id="d" type="text" value=""></br>'
					+'	<button id="bt">결과보기</button>'
					+'	<h3 id="r"></h3></div>';*/
				
				$('<div/>')
				.attr({id : "ques"}).appendTo($td2);
				$('<h3/>')
				.html('시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.').appendTo($('#ques'));
				
				let arr = [{id:'start',label:'시작값'},
							{id:'end',label:'마지막값'},
							{id:'d',label:'공차'}];
				
				/*  for(let i in arr){
					$('<div/>')
					.attr({id : "temp_"+i}).appendTo($('#ques'));
					
					$('<label/>')
					.html(arr[i].label).appendTo($('#temp_'+i));
					$('<input/>')
					.attr({id : arr[i].id, type : 'text'}).appendTo($('#temp_'+i));
					$('<br/>').appendTo($('#temp_'+i));
				}
				
				 $.each(arr,(i, v)=>{
					$('<div/>')
					.attr({id : "temp_"+i}).appendTo($('#ques'));
					$('<label/>')
					.html(v.label).appendTo($('#temp_'+i));
					$('<input/>')
					.attr({id : v.id, type : 'text'}).appendTo($('#temp_'+i));
					$('<br/>').appendTo($('#temp_'+i));
				});	*/
				
				$.each(arr,function(){
					$('<div/>')
					.attr({id : "lab_"+this.id}).appendTo($('#ques'));
					$('<label/>')
					.html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>')
					.attr({id : this.id, type : 'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				}); // Arrow는 아직 적용되지않았다.
				
				$('<button/>')
				.addClass('btn btn-primary')
				.html('결과보기')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>')
					.attr({id : 'r'})
					.appendTo($('#ques'));
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
					}
				});
			});
			
			$('<li/>')
			.attr({id:'fibonacci'})
			.addClass('list-group-item')
			.appendTo($('#side_menu'));
			$('<a/>')
			.attr({href:'#'})
			.html('피보나치수열')
			.appendTo($('#fibonacci'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>')
				.attr({id : 'ques'})
				.appendTo($td2);
				$('<h3/>')
				.html('1 + 1 + 2 + 3 + 5 + 8 + ...  와 같은 피보나치 수열의 N항까지의 합을 구하시오.').appendTo($('#ques'));
				let arr = [{id : 's', label : '시작값'},{id : 'seq' , label : 'N항' }];
				$.each(arr, function(){
					$('<div/>').attr({id : 'lab_'+this.id}).appendTo($('#ques'));
					$('<label/>').html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>').attr({id : this.id, type : 'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				});
				$('<button/>')
				.addClass('btn btn-primary')
				.html('결과보기')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>').attr({id : 'r'}).appendTo($('#ques'));
					let start = $('#s').val()*1;
					let end = $('#seq').val()*1;
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
					}
				});
			});
			$('<li/>')
			.attr({id : 'swit'})
			.addClass('list-group-item')
			.appendTo($('#side_menu'));
			$('<a/>')
			.attr({href : '#'})
			.html('스위치수열')
			.appendTo($('#swit'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>').attr({id : 'ques'}).appendTo($td2);
				$('<h3/>').html('시작값 x, 마지막값 y로 홀수는 더하고 짝수는 빼는 수열의 합을 구하시오.').appendTo($('#ques'));
				let arr = [{id : 's', label : '시작값'},{id : 'e', label : '마지막값'}];
				$.each(arr,function(){
					$('<div/>').attr({id : 'lab_'+this.id}).appendTo($('#ques'));
					$('<label/>').html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>').attr({id : this.id, type : 'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				});
				$('<button/>')
				.html('결과보기')
				.addClass('btn btn-primary')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>').attr({id:'r'}).appendTo($('#ques'));
					let start = $('#s').val()*1;
					let end = $('#e').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start, end]))?
									'빈칸을 채우세요.':'실행'
					);
					if($('#r').text() === '실행'){
						let a = start;
						let swit = 1;
						let i = 0;
						let sum = 0;
						while(i<end){
							if(swit == 1){
								sum = sum + a;
							}else if(swit == -1){
								sum = sum - a;
							}
							a = a + 1;
							swit = swit * -1 ;
							i = i + 1;
						}
						$('#r').text("답 :"+sum);
					}
				});
			});
			$('<li/>')
			.attr({id:'factorial'}).appendTo($td2);
			$('<a/>')
			.attr({href:'#'})
			.html('팩토리얼수열')
			.appendTo($('#factorial'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>')
				.attr({id:'ques'}).appendTo($td2);
				$('<h3/>')
				.html('시작값 x, 마지막값 y로  x! + ... + y! 팩토리얼 수열의 합을 구하시오.').appendTo($('#ques'));
				let arr = [{id:'s', label:'시작값'},{id:'e', label:'마지막값'}];
				$.each(arr,function(){
					$('<div/>').attr({id:'lab_'+this.id}).appendTo($('ques'));
					$('<label/>').html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>').attr({id:this.id, type:'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				});
				$('<button/>')
				.html('결과보기')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>').attr({id : 'r'}).appendTo($('#ques'));
					let start = $('#s').val()*1;
					let end = $('#e').val()*1;
				});
			});
			
			
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
 