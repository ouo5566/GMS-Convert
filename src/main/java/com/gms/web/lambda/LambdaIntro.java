package com.gms.web.lambda;

public class LambdaIntro {
	public static void main(String[] args) {
		System.out.println(Num.execute( (t1, t2) -> t1 > t2 ? t1 : t2 , 5, 11));
	}
	@FunctionalInterface
	interface Calc<T>{T excute(T t1, T t2);}
	static class Num{
		public static <T> T execute(Calc<T> c, T t1, T t2){
			return c.excute(t1, t2);
		}
	}
}

/*

람다식(람다함수)
식 : expression. EL ${total = page} : 한 공간에서 결과가 나온다. 블락X
함수 : function. aa(p){ x=2+p; return x;} : 두 개 이상의 문장으로 구성되어 블락을 준다.
-> 함수는 연산식(Statement)이 하나이면 {}block 생략가능 : 식
=> 식이 될 수도, 함수가 될 수도 있다.



*/
