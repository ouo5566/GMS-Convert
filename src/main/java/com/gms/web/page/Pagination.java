package com.gms.web.page;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class Pagination implements Proxy{
	private int pageSize, blockSize, countRow, countPage, pageNum, block,
				endRow, beginRow, beginPage, endPage, nextBlock, prevBlock;
	private boolean nextPage, prevPage;
	
	@Override
	public void carryOut(Object o) {
		this.pageNum = Integer.parseInt(o.toString());
		this.pageSize = 5 ;
		this.blockSize = 5 ;
		//this.countRow = Integer.parseInt(map.get("countRow").toString());
		//this.countPage = countRow / pageSize + ((countRow % pageSize == 0) ? 0 : 1 ); // 총 페이지
		this.block = ( pageNum + (blockSize - 1) ) / blockSize ;
		//int nextPage = ((countPage - block * blockSize > 0))? countPage - block * blockSize : 0 ,
		//	prevPage = (countPage - ( nextPage + blockSize ) > 0)? countPage-( nextPage + blockSize ) : 0 ;
		//this.nextPage = nextPage > 0 ;
		//this.prevPage = prevPage > 0 ;
		this.endRow = pageNum * pageSize;
		this.beginRow = pageNum * pageSize - (pageSize - 1);
		//this.endPage = ((countPage - nextPage) % blockSize == 0) ? block * blockSize : countPage ;
		this.beginPage = block * blockSize - (blockSize - 1) ;
		this.nextBlock = (this.nextPage) ? beginPage + blockSize : 0 ;
		this.prevBlock = (this.prevPage) ? beginPage - blockSize : 0 ;
	}
}