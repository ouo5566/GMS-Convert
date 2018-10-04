package com.gms.web.tx;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.brd.Board;
import com.gms.web.brd.BoardMapper;
import com.gms.web.point.PointMapper;

@Service
@Transactional
public class TxService {
	@Autowired BoardMapper brdMapper;
	@Autowired PointMapper poMapper;
	@Autowired Board brd;
	@Autowired HashMap<String, Object> map;
	public Map<String, Object> write(Map<String, Object> p){
		map.clear();
		brdMapper.create(brd);
		poMapper.update(map);
		map.clear();
		return map;
	}
	public Map<String, Object> delete(Map<String, Object> p){
		map.clear();
		brdMapper.delete(Integer.parseInt(p.get("bno").toString()));
		poMapper.update(map);
		map.clear();
		return map;
	}
}
