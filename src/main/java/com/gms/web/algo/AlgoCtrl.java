package com.gms.web.algo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;

@RestController
@RequestMapping("/algo")
public class AlgoCtrl {
	@GetMapping("/money/{val}")
	public void money(@PathVariable String val) {
		Util.logger.accept(":: AlgoCtrl :: 넘어온 화폐값 :: " + val);
	}
	@PostMapping("/money")
	public @ResponseBody Map<String, Object> money2(@RequestBody Map<String, Object> map) {
		Map<String, Object> rmap = new HashMap<>();
		rmap.put("test", "Congratulations !!");
		Util.logger.accept(":: AlgoCtrl :: 넘어온 화폐값 :: "+map.get("money"));
		return rmap;
	}
}
