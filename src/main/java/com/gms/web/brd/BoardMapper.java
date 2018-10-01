package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.brd.Board;
import com.gms.web.cmm.Criteria;
import com.gms.web.cmm.SearchCriteria;
import com.gms.web.page.Pagination;

@Repository
public interface BoardMapper {
  
  public void delete(Integer bno) ;
  public List<Board> listAll(Pagination p);
  public List<Board> listPage(int page) ;
  public List<Board> listCriteria(Criteria cri) ;
  public int countPaging(Criteria cri) ;
  //use for dynamic sql
  public List<Board> listSearch(SearchCriteria cri);
  public int listSearchCount(SearchCriteria cri);
  public void updateReplyCnt(Integer bno, int amount);
  public void updateViewCnt(Integer bno);
  public void addAttach(String fullName);
  public List<String> getAttach(Integer bno);  
  public void deleteAttach(Integer bno);
  public void replaceAttach(String fullName, Integer bno);
  
  public void create(Board vo) ;
  public Board read(Integer bno) ;
  public void update(Board vo) ;
  public int countAll();
  public List<Board> listMyBoard(Map<String, Object> p);
  public int listMyBoardCount(String keyword);
}
