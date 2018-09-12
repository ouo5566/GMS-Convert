package com.gms.web.generic;

import java.util.Arrays;
import java.util.List;

public class GenericIntro {
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		System.out.println("[1]");
		Item<String> itName = new Item<>();
		itName.setOne("GalaxyNote");
		Item<Integer> itVers = new Item<>();
		itVers.setOne(9);
		System.out.println("Samsung new phone name is :: "+ itName.getOne() + itVers.getOne());
		
		System.out.println("[2]");
		Item<List<String>> it = new Item<>();
		it.setSome(
				Arrays.asList( new String[] {"Hello", "World", "Generic"} )
				);
		System.out.println(it.getSome());
		
		System.out.println("[3]");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Apple> abox = new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));
	}
}


/*
Generic : Type 을 생성한다.
class Member{} -> static 상태인 Member Type을 생성 : List<Member> (book, 만화책 : 보는 면이 다르고 수정불가)
<-> Dynamic한 생성 (e-book, 애니메이션 : 보는 면이 같고 수정가능) : get, set이 필요없다 ? 그때그때 만들어서 보여주고 삭제

Why Generic ?
-> 장점 : 타입의 안정성 제공, 형변환 생략


*/
