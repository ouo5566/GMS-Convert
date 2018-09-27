package com.gms.web.brd;

import java.util.List;

import com.gms.web.brd.Board;
import com.gms.web.cmm.Criteria;
import com.gms.web.cmm.SearchCriteria;


public interface BoardService {

  public void regist(Board board) throws Exception;

  public Board read(Integer bno) throws Exception;

  public void modify(Board board) throws Exception;

  public void remove(Integer bno) throws Exception;

  public List<Board> listAll() throws Exception;

  public List<Board> listCriteria(Criteria cri) throws Exception;

  public int listCountCriteria(Criteria cri) throws Exception;

  public List<Board> listSearchCriteria(SearchCriteria cri) 
      throws Exception;

  public int listSearchCount(SearchCriteria cri) throws Exception;
  
  
  public List<String> getAttach(Integer bno)throws Exception;
  

}
