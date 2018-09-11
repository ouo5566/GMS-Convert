package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class ImageDTO {
	private String imgSeq, imgName, extension, memberId; 
}
