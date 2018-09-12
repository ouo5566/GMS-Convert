package com.gms.web.lambda;

import java.util.function.Predicate;

public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p = s -> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(x)) ? "NULL" : "NOTNULL" ; 
		System.out.println(r);
		r = (p.test(y)) ? "NULL" : "NOTNULL" ; 
		System.out.println(r);
		
	}
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


*/
