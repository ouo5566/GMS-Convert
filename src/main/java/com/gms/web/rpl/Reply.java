package com.gms.web.rpl;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class Reply {

  private Integer rno;
  private Integer bno;
  private String replytext;
  private String replyer;

  private Date regdate;
  private Date updatedate;

}
