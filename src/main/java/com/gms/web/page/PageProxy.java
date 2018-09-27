package com.gms.web.page;

import lombok.Data;
@Data
public class PageProxy implements Proxy{
	private Proxy p;
	
	@Override
	public void carryOut(Object o) {
		p = new Pagination();
		p.carryOut(o);
	}
}