package com.gms.web.exam;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class Exam {
	String sbjSeq, exmSeq, term, score, memberId;
}
