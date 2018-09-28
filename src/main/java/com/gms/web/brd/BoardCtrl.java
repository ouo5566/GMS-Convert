package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	@Autowired Board Board;
	@Autowired BoardMapper brdMap;
	@Autowired Pagination page;
	@Autowired HashMap<String, Object> map;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String, Object> list(@PathVariable String pageNo){
		Util.logger.accept(":: BoardCtrl :: list() ");
		map.clear();
		map.put("pageNum", pageNo);
		map.put("countRow", brdMap.countAll());
		page.carryOut(map);
		Util.logger.accept(":: BoardCtrl :: list() :: page :: "+page);
		map.clear();
		List<Board> ls = brdMap.listAll(page); 
		map.put("list", ls);
		map.put("page", page);
		return map;
	}
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String, Object> myBoard(@PathVariable String pageNo, @PathVariable String id){
		Util.logger.accept(":: BoardCtrl :: myBoard() ");
		map.clear();
		map.put("pageNum", pageNo);
		map.put("countRow", brdMap.listMyBoardCount(id));
		page.carryOut(map);
		Util.logger.accept(":: BoardCtrl :: myBoard() :: page :: "+page);
		map.clear();
		map.put("keyword", id);
		map.put("page", page);
		List<Board> ls = brdMap.listMyBoard(map); 
		map.put("list", ls);
		map.put("page", page);
		return map;
	}
}