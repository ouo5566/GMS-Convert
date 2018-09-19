package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.LoggerFactory;

public class Util {
	// Lambda Method Reference
	public static Consumer<String> logger = LoggerFactory.getLogger(Util.class)::info;
	public static Consumer<String> log = System.out::println;
	public static Consumer<Integer> logi = System.out::println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	public static Function<Integer, String> convStr = String::valueOf;
	public static Predicate<String> equal = s -> s.equals("");
	public static Function<HttpServletRequest, String> ctx = HttpServletRequest::getContextPath;
}

/*
이미 만들어져있는 Lambda ?

Consumer<T>	: void accept(T t) 
-> Represents an operation that accepts a single input argument and returns no result.
=> C.U.D
Function<T,R> : R apply(T t)
-> Represents a function that accepts one argument and produces a result.
=> 파라미터가 있는 R
Predicate<T> : boolean test(T t) 
-> Represents a predicate (boolean-valued function) of one argument.
=> Login
Supplier<T>	: T get()
-> Represents a supplier of results.
=> Count, 파라미터가 없는 R
UnaryOperator<T> : static <T> UnaryOperator<T> identity()
-> Represents an operation on a single operand that produces a result of the same type as its operand.
-> 쓸모있어보이진않음 / Unary : 단항

람다식(람다함수)
식 : expression. EL ${total = page} : 한 공간에서 결과가 나온다. 블락X
함수 : function. aa(p){ x=2+p; return x;} : 두 개 이상의 문장으로 구성되어 블락을 준다.
-> 함수는 연산식(Statement)이 하나이면 {}block 생략가능 : 식
=> 식이 될 수도, 함수가 될 수도 있다.

들어가는 파라미터가 하나로 정해져있고, 타입도 정의되어 있을 때 ->와 파라미터도 생략할 수 있다.
Function<String, Integer> f = s -> Integer.parseInt(s);
	=> Function<String, Integer> f = Integer::parseInt; 
메소드 앞에서 :: 을 써준다 > System.out::println;
*/
