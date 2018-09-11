package com.gms.web.brd;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@RequestMapping("/board")
@SessionAttributes("")
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Article article;
	@Autowired BoardService boardService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("article") Article p) {
		logger.info("add()");
		boardService.add(p);
		return "";
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
	@RequestMapping("/retrieve/{id}")
	public String retrieve(Model model, @PathVariable String id) {
		Article p = new Article();
		p.setBno(id);
		model.addAttribute("user", boardService.retrieve(p));
		return "";
	}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(Model model, @ModelAttribute("article") Article p) {
		logger.info("modify()");
		boardService.modify(p);
		model.addAttribute("user", boardService.retrieve(p));
		return "";
	}
	@RequestMapping("/remove")
	public String remove(@ModelAttribute("article") Article p) {
		logger.info("remove()");
		boardService.remove(p);
		return "redirect:/";
	}
}