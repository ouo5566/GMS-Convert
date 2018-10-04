package com.gms.web.brd;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gms.web.cmm.Util;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	@Autowired Board board;
	@Autowired BoardMapper brdMap;
	@Autowired Pagination page;
	@Autowired HashMap<String, Object> map;
	@Resource(name = "uploadPath")
	private String uploadPath;
	class FileForm {
		private List<MultipartFile> files;
		public List<MultipartFile> getFiles() {
	          return files;
		}
		public void setFiles(List<MultipartFile> files) {
			this.files = files;
		}
	}
	
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String, Object> list(@PathVariable String pageNo){
		Util.logger.accept(":: BoardCtrl :: list() ");
		map.clear();
		map.put("pageNum", pageNo);
		map.put("countRow", brdMap.countAll());
		page.carryOut(map);
		Util.logger.accept(":: BoardCtrl :: list() :: page :: "+page);
		map.clear();
		List<Board> ls = brdMap.listAll(page); 
		map.put("list", ls);
		map.put("page", page);
		return map;
	}
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String, Object> myBoard(@PathVariable String pageNo, @PathVariable String id){
		Util.logger.accept(":: BoardCtrl :: myBoard() ");
		map.clear();
		map.put("pageNum", pageNo);
		map.put("countRow", brdMap.listMyBoardCount(id));
		page.carryOut(map);
		Util.logger.accept(":: BoardCtrl :: myBoard() :: page :: "+page);
		map.clear();
		map.put("keyword", id);
		map.put("page", page);
		List<Board> ls = brdMap.listMyBoard(map); 
		map.put("list", ls);
		map.put("page", page);
		return map;
	}
	@PostMapping("/boards/new")
	public void postBoard(@RequestBody Board b){
		Util.logger.accept(":: BoardCtrl :: postBoard() ");
		
		brdMap.create(b);
	}
	@RequestMapping("/boards/get/{num}")
	public @ResponseBody Board getBoard(@PathVariable int num){
		Util.logger.accept(":: BoardCtrl :: getBoard() ");
		board = brdMap.read(num);
		return board;
	}
	@PostMapping("/boards/put")
	public void putBoard(@RequestBody Board b){
		Util.logger.accept(":: BoardCtrl :: putBoard() ");
		System.out.println(b);
		brdMap.update(b);
	}
	@RequestMapping("/boards/delete/{num}")
	public void deleteBoard(@PathVariable int num){
		Util.logger.accept(":: BoardCtrl :: deleteBoard() ");
		brdMap.delete(num);
	}
	@PostMapping("/boards/fileupload")
	public Object fileupload(@ModelAttribute("uploadForm") FileForm uploadForm) throws IOException{
		Util.logger.accept(":: BoardCtrl :: fileupload() ");
		 List<MultipartFile> files = uploadForm.getFiles();

		//success.jsp 로 보낼 파일 이름 저장
		  List<String> fileNames = new ArrayList<String>();
		  if (null != files && files.size() > 0) {
		   for (MultipartFile multipartFile : files) {
		    String fileName = multipartFile.getOriginalFilename();
		    String path = uploadPath + fileName;

		File f = new File(path);

		multipartFile.transferTo(f);

		fileNames.add(fileName);
		Util.logger.accept("fileupload SUCCESS !! ");
		   }
		  }
		  //map.addAttribute("files", fileNames);
		  return "success";
	}
	@PostMapping("/uploadAjax")
	@ResponseBody
	public ResponseEntity<String> uploadAjax(MultipartFile file) throws Exception{
		Util.logger.accept("originalName :: "+file.getOriginalFilename());
		Util.logger.accept("size :: "+file.getSize());
		Util.logger.accept("contentType:: "+file.getContentType());
		return new ResponseEntity<>(file.getOriginalFilename(), HttpStatus.CREATED);
	}
}