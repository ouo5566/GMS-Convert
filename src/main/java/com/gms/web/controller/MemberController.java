package com.gms.web.controller;

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

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService memberService;
	@Autowired MemberDTO member;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member) {
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
	public String retrieve(Model model, @ModelAttribute("user") MemberDTO user) {
		if(user.getMemberId() != null){
			member.setMemberId(user.getMemberId());
			model.addAttribute("user", memberService.retrieve(member));
			return "login:member/retrieve.tiles";
		}
		return "main";
	}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") MemberDTO member, @ModelAttribute("user") MemberDTO user) {
		logger.info("modify()");
		member.setMemberId(user.getMemberId());
		memberService.modify(member);
		user = memberService.retrieve(member);
		return "login:member/retrieve.tiles";
	}
	@RequestMapping("/remove")
	public String remove(HttpSession session, @ModelAttribute("user") MemberDTO user) {
		logger.info("remove()");
		memberService.remove(user);
		session.removeAttribute("user");
		return "redirect:/";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(Model model
			, @ModelAttribute("member") MemberDTO member) {
		logger.info("login()");
		if(memberService.login(member)) {
			model.addAttribute("user", memberService.retrieve(member));
		}else {
			return "auth:member/login.tiles" ;
		}
		return "login_success";
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		logger.info("logout()");
		session.removeAttribute("user");
		return "redirect:/";
	}
}
