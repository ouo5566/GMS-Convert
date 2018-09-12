package com.gms.web.generic;

import java.util.Collections;

public class CarMain {
	public static void main(String[] args) {
		CarBox<BMW> bbox = new CarBox<>();
		CarBox<Avante> abox = new CarBox<>();
		CarBox<Car> cbox = new CarBox<>();
		
		abox.add(new Avante("아반떼_A", 1500));
		abox.add(new Avante("아반떼_B", 1800));
		abox.add(new Avante("아반떼_C", 2000));
		bbox.add(new BMW("BMW_A", 1900));
		bbox.add(new BMW("BMW_B", 2500));
		bbox.add(new BMW("BMW_C", 4000));
		cbox.add(new Avante("아반떼_A", 1500));
		cbox.add(new Avante("아반떼_B", 1800));
		cbox.add(new Avante("아반떼_C", 2000));
		cbox.add(new BMW("BMW_A", 1900));
		cbox.add(new BMW("BMW_B", 2500));
		cbox.add(new BMW("BMW_C", 4000));
		Collections.sort(abox.getList(), new CarOrder());
		Collections.sort(bbox.getList(), new CarOrder());
		Collections.sort(cbox.getList(), new CarOrder());
		System.out.println(abox);
		System.out.println(bbox);
		System.out.println(cbox);
	}
}
