package com.gms.web.brd;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody List<Board> list(@PathVariable String pageNo){
		Util.logger.accept(":: BoardCtrl :: list() :: pageNo :: " + pageNo);
		page.carryOut(pageNo);
		List<Board> ls = brdMap.listAll(page); 
		return ls;
	}
}