package com.gms.web.exam;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Exam {
	private String bno, title, content, writer, regdate, viewcnt;
}
