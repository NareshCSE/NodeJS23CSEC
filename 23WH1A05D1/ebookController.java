package com.bvrith.ebook.ebookbe.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.bvrith.ebook.ebookbe.dao.BookDAO;
import com.bvrith.ebook.ebookbe.model.Book;

@RestController
public class ebookController {
	@Autowired
	private BookDAO bookDAO;
	
@GetMapping("/getAllBooks")
//public String getBooks() {
	public List<Book> getbooks(){
	return ((BookDAO) bookDAO).findAll();
}
}
