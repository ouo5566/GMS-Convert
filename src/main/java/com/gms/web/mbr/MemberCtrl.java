package com.gms.web.mbr;

import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.cmm.Util;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired MemberService memberService;
	@Autowired Member member;
	@Autowired MemberMapper memberMapper;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		logger.info("add()");
		memberService.add(member);
		return "auth:member/login.tiles";
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
			member.setMemberId(user.getMemberId());
			model.addAttribute("user", memberService.retrieve(member));
			return "login:member/retrieve.tiles";
		}
		return "main";
	}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") Member member, @ModelAttribute("user") Member user) {
		logger.info("modify()");
		member.setMemberId(user.getMemberId());
		memberService.modify(member);
		user = memberService.retrieve(member);
		return "login:member/retrieve.tiles";
	}
	@RequestMapping("/remove")
	public String remove(HttpSession session, @ModelAttribute("user") Member user) {
		logger.info("remove()");
		memberService.remove(user);
		session.removeAttribute("user");
		return "redirect:/";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(Model model
			, @ModelAttribute("member") Member member) {
		logger.info("login()");
		String view = "auth:member/login.tiles";
		// Predicate<String> p = s -> !s.equals("") ;
		Predicate<String> p = s -> s.equals("");
		Predicate<String> notP = p.negate();
		if(notP.test(memberMapper.exist(member.getMemberId()))) {
			Function<Member, Member> f = t -> memberMapper.selectOne(t);
			view = (f.apply(member) != null) ?
					"login_success"
						: "auth:member/login.tiles" ;
		}
		
		
		this.member = (Predicate.isEqual("login_success").test(view))?
				memberMapper.selectOne(member) 
					: new Member();
		
		Util.logger.accept(this.member.toString());
		
		/*
		Predicate<String> l = s -> s.equals("login_success");
		if(l.test(view)) {
			this.member = memberMapper.selectOne(member);
			System.out.println(this.member);
		}
		*/
		
		return view ;
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		logger.info("logout()");
		session.removeAttribute("user");
		return "redirect:/";
	}
}
