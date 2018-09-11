package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public interface BoardService {
	public void add(Article p);
	public List<?> list(Map<?, ?> p);
	public List<?> search(Map<?, ?> p);
	public Article retrieve(Article p);
	public int count(Map<?, ?> p);
	public void modify(Article p);
	public void remove(Article p);
}
