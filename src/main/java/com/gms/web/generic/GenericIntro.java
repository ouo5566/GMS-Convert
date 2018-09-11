package com.gms.web.generic;

public class GenericIntro {
	public static void main(String[] args) {
		
	}
	class Box<T>{
		T item;

		public T getItem() {
			return item;
		}

		public void setItem(T item) {
			this.item = item;
		}
	}
}

/*
Generic : Type 을 생성한다.
class Member{} -> static 상태인 Member Type을 생성 : List<Member> (book, 만화책 : 보는 면이 다르고 수정불가)
<-> Dynamic한 생성 (e-book, 애니메이션 : 보는 면이 같고 수정가능) : get, set이 필요없다 ? 그때그때 만들어서 보여주고 삭제

Why Generic ?
-> 장점 : 타입의 안정성 제공, 형변환 생략


*/
