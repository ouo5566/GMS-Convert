package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class ArticleDTO {
	private String bno, title, content, writer, regdate, viewcnt;
}
