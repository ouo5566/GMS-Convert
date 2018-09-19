"use strict" //에러가 나면 보여주겠다.
function Session(x){
	sessionStorage.setItem('context', x);
	sessionStorage.setItem('script', x+'/resources/js');
	sessionStorage.setItem('style', x+'/resources/css');
	sessionStorage.setItem('img', x+'/resources/img');
	return {
		ctx : () => {return sessionStorage.getItem('context');},
		script : () => {return sessionStorage.getItem('script');},
		style : () => {return sessionStorage.getItem('style');},
		img : () => {return sessionStorage.getItem('img');}
	};
}