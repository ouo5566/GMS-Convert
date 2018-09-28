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
		@SuppressWarnings("unchecked")
		Map<String, Object> map = (Map<String, Object>) o;
		pageNum = Integer.parseInt(map.get("pageNum").toString());
		pageSize = 5 ;
		blockSize = 5 ;
		countRow = Integer.parseInt(map.get("countRow").toString());
		countPage = countRow / pageSize + ((countRow % pageSize == 0) ? 0 : 1 ); // 총 페이지
		block = ( pageNum + (blockSize - 1) ) / blockSize ;
		int nextPage = ((countPage - block * blockSize > 0))? countPage - block * blockSize : 0 ,
			prevPage = (countPage - ( nextPage + blockSize ) > 0)? countPage-( nextPage + blockSize ) : 0 ;
		this.nextPage = nextPage > 0 ;
		this.prevPage = prevPage > 0 ;
		endRow = pageNum * pageSize;
		beginRow = pageNum * pageSize - (pageSize - 1);
		endPage = ((countPage - nextPage) % blockSize == 0) ? block * blockSize : countPage ;
		beginPage = block * blockSize - (blockSize - 1) ;
		nextBlock = (this.nextPage) ? beginPage + blockSize : 0 ;
		prevBlock = (this.prevPage) ? beginPage - blockSize : 0 ;
		// beginRow endRow prevPage prevBlock nextPage nextBlock
	}
}