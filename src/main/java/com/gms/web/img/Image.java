package com.gms.web.img;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Image {
	private String imgSeq, imgName, extension, memberId; 
}
