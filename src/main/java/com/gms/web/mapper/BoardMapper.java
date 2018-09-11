package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.brd.Article;
@Repository
public interface BoardMapper {
	public void insert(Article p);
	public List<?> selectList(Map<?, ?> p);
	public List<?> selectSome(Map<?, ?> p);
	public Article selectOne(Article p);
	public int count(Map<?, ?> p);
	public void update(Article p);
	public void delete(Article p);
	
	public Article listPage();
	public Article listCriteria();
	public int countPaging();
	public Article listSearch();
	public int listSearchCount();
}
