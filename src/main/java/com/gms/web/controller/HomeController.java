package com.gms.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes("context")
public class HomeController {
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpSession session, HttpServletRequest request) {
		String context = request.getContextPath();
		logger.info("home() context :: {}", context);
		session.setAttribute("context", context);
		return "public:common/content.tiles";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(@PathVariable String dir, @PathVariable String page, @PathVariable String prefix ) {
		logger.info("move() page :: "+page);
		return prefix+":"+ dir+"/"+page+".tiles" ;
	}
}
