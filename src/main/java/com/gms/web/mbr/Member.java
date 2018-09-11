package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Member {
	private String memberId, teamId, name, ssn, roll, pw, age, gender, subject;
}

/*
 line 7 : Bean으로 사용하겠다.
 line 8 : getter, setter를 하겠다.
 */