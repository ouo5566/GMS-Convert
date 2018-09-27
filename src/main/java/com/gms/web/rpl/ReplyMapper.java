package com.gms.web.rpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.cmm.Criteria;
import com.gms.web.rpl.Reply;

@Repository
public interface ReplyMapper {

  public List<Reply> list(Integer bno) throws Exception;

  public void create(Reply vo) throws Exception;

  public void update(Reply vo) throws Exception;

  public void delete(Integer rno) throws Exception;

  public List<Reply> listPage(Integer bno, Criteria cri) throws Exception;

  public int count(Integer bno) throws Exception;

  public int getBno(Integer rno) throws Exception;

}
