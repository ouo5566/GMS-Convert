"use strict"
$.prototype.nullChecker = x=>{
	// JQuery prototype(원형)에 내가 만든 nullChecker 를 추가하여 앞으로 JQuery원형을 통해 사용하겠다.
	let flag = false;
	let i = 0;
	for(i in x){
		if(x[i] === ''){
			flag = true;
		}
	}
	return flag;
}
$.prototype.zeroChecker = x=>{
	// JQuery prototype(원형)에 내가 만든 nullChecker 를 추가하여 앞으로 JQuery원형을 통해 사용하겠다.
	let flag = false;
	let i = 0;
	for(i in x){
		if(x[i] == 0){
			flag = true;
		}
	}
	return flag;
}

$.prototype.anchor = x => {
	return $('<a/>').attr({href : '#'}).html(x.txt);
}