package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.*;

@RestController
@RequestMapping("/mbr")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member mbr;
	@Autowired MemberMapper memberMapper;
	@PostMapping("/add")
	public @ResponseBody Map<String, Object> add(@RequestBody Member p) {
		Util.logger.accept("add() :: 넘어온 정보 :: "+p);
		Util.logger.accept("add() :: 넘어온 정보 :: "+p.getSubject().toString());
		Map<String, Object> r = new HashMap<>();
		//Once.getAnG.apply(p);
		Util.logger.accept(p.getAge()+"/"+p.getGender());
		return r;
	}
/*	
	@RequestMapping("/list")
	public void list() {
		
	}
	@RequestMapping("/search")
	public void search() {
		
	}
	@RequestMapping("/count")
	public void count() {
		
	}
	@RequestMapping("/fileupload")
	public void fileupload() {
		
	}
*/
	@RequestMapping("/retrieve")
	public String retrieve(Model model, @ModelAttribute("user") Member user) {
		if(user.getMemberId() != null){
			mbr.setMemberId(user.getMemberId());
			return "login:member/retrieve.tiles";
		}
		return "main";
	}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") Member member, @ModelAttribute("user") Member user) {
		logger.info("modify()");
		member.setMemberId(user.getMemberId());
		return "login:member/retrieve.tiles";
	}
	@RequestMapping("/remove")
	public String remove(HttpSession session, @ModelAttribute("user") Member user) {
		logger.info("remove()");
		return "redirect:/";
	}
	@PostMapping("/login")
	public @ResponseBody Map<String, Object> login(@RequestBody Member member) {
		Map<String, Object> r = new HashMap<>();
		Util.logger.accept("login() :: 넘어온 로그인 정보 :: "+member.getMemberId()+"/"+member.getPw());
		// Predicate<String> p = s -> !s.equals("") ;
		
		String flag = "ID WRONG";
		if(memberMapper.count(member) != 0) {
			Function<Member, Member> f = m -> memberMapper.get(m);
			mbr = f.apply(member);
			flag = (mbr != null) ?
					"login_success"
						: "PW WRONG" ;
			mbr = (Predicate.isEqual("login_success").test(flag))?
					mbr : new Member();
		}
		Util.logger.accept(flag);
		r.put("flag", flag);
		r.put("member", mbr);
		
		/*
		Predicate<String> l = s -> s.equals("login_success");
		if(l.test(view)) {
			this.member = memberMapper.selectOne(member);
			System.out.println(this.member);
		}
		*/
		
		return r ;
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		logger.info("logout()");
		return "redirect:/";
	}
}
