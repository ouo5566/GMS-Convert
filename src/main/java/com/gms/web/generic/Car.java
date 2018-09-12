package com.gms.web.generic;

import java.util.Comparator;

import lombok.Data;

@Data
public class Car {
	String name;
	int price;
	public Car(String name, int price) {
		this.name = name;
		this.price = price;
	}
}
class BMW extends Car{
	BMW(String name, int price) {
		super(name, price);
	}
}
class Avante extends Car{
	Avante(String name, int price) {
		super(name, price);
	}
}
class Sonata extends Car{
	Sonata(String name, int price) {
		super(name, price);
	}
}
class Genesis extends Car{
	Genesis(String name, int price) {
		super(name, price);
	}
}
class CarOrder implements Comparator<Car>{
	@Override
	public int compare(Car b1, Car b2) {
		return b2.price - b1.price;
	}
}
class CarBox<T extends Car> extends Box<T>{} 