package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;

import lombok.Data;

@Data
@Component
@Lazy
public class Board {
	
	private Integer bno;
	private String title;
	private String content;
	private String writer;
	private String regdate;
	private Integer viewcnt;
	private Integer replycnt;
	
	private Member mbr;
	private List<Attach> attachs;

}
