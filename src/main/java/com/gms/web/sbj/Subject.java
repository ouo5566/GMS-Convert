package com.gms.web.sbj;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class Subject {
	String sbjSeq, sbjName;
}
