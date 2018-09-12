package com.gms.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import org.slf4j.LoggerFactory;

public class Util {
	// Lambda Method Reference
	public static Consumer<String> logger = LoggerFactory.getLogger(Util.class)::info;
	public static Consumer<String> log = System.out::println;
	public static Consumer<Integer> logi = System.out::println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	public static Function<Integer, String> convStr = String::valueOf;
	public static Predicate<String> equal = s -> s.equals("");
	
}
