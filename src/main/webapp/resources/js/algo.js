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
			$('#td1').html('<a id="arith"> 등차수열 </a> </br>');
			$('#td1').append('<a id="fibonacci"> 피보나치 </a> </br>'
							+ '<a id="swit"> 스위치수열 </a> </br>'
							+ '<a id="factorial"> 팩토리얼 </a> </br>'); // 오버로딩
			$('#arith').click(e=>{
				alert('등차수열 선택');
			});
			$('#fibonacci').click(e=>{
				alert('피보나치 선택');
			});
			$('#swit').click(e=>{
				alert('스위치수열 선택');
			});
			$('#factorial').click(e=>{
				alert('팩토리얼 선택');
			});
		}
}
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
					algo.main.onCreate();
				}
			); // 외부의 js파일 호출, import 느낌
	}
} 