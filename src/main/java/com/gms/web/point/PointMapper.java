package com.gms.web.point;

import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface PointMapper {
	public void update(Map<?,?> p);
}
