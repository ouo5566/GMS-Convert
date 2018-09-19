package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public class Once {
	public static Function<Member, Member> getAnG = (Member p)->{
		String ssn = p.getSsn();
		p.setAge(String.valueOf( 2019 - Integer.parseInt(
												((Integer.parseInt(ssn.substring(0, 2)) 
														> Integer.parseInt(new SimpleDateFormat("yyyy")
																				.format(new Date())
																				.substring(2)))
													? "19" : "20")
												+ssn.substring(0, 2))));
		p.setGender((ssn.split("-")[1].equals("1"))?"MEN":"WOMEN");
		return p;
	};
}
/**/