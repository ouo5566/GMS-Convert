package com.gms.web.lambda;

import java.util.function.Consumer;
import java.util.function.Function;

public class LambdaMethod {
	public static void main(String[] args) {
		Function<String, Integer> f = Integer::parseInt;
		System.out.println(f.apply("100") + 10 + 1);
		
		Consumer<String> c = System.out::println;
		c.accept("Hello Lambda");
		/* 들어가는 파라미터가 하나로 정해져있고, 타입도 정의되어 있을 때 ->와 파라미터도 생략할 수 있다.
		 Function<String, Integer> f = s -> Integer.parseInt(s);
			=> Function<String, Integer> f = Integer::parseInt; 
		 메소드 앞에서 :: 을 써준다 > System.out::println;
		*/
	}
}
