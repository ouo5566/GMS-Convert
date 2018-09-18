package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HomeCtrl {
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request) {
		model.addAttribute("context", Util.ctx.apply(request));
		Util.logger.accept(Util.ctx.apply(request));
		return "main";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(@PathVariable String dir, @PathVariable String page, @PathVariable String prefix ) {
		logger.info("move() page :: "+page);
		return prefix+":"+ dir+"/"+page+".tiles" ;
	}
}
