package com.gms.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
	@Autowired MemberMapper memberDAO;
	@Override
	public void add(Member p) {
		String ssn = p.getSsn();
		p.setAge(String.valueOf( 2019 - Integer.parseInt(
												((Integer.parseInt(ssn.substring(0, 2)) 
														> Integer.parseInt(new SimpleDateFormat("yyyy")
																				.format(new Date())
																				.substring(2)))
													? "19" : "20")
												+ssn.substring(0, 2))));
		p.setGender((ssn.split("-")[1].equals("1"))?"MEN":"WOMEN");
		memberDAO.insert(p);
	}
	
	@Override
	public List<?> list(Map<?, ?> p) {return null;}
	@Override
	public List<?> search(Map<?, ?> p) {return null;}
	@Override
	public int count(Map<?, ?> p) {return 0;}
	
	@Override
	public Member retrieve(Member p) {
		return memberDAO.selectOne(p);
	}

	@Override
	public void modify(Member p) {
		memberDAO.update(p);
	}

	@Override
	public void remove(Member p) {
		memberDAO.delete(p);
	}

	@Override
	public boolean login(Member p) {
		return (memberDAO.selectOne(p) != null);
	}

}
