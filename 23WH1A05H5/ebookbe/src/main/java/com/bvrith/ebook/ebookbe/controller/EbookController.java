package com.bvrith.ebook.ebookbe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bvrith.ebook.ebookbe.dao.BookDAO;
import com.bvrith.ebook.ebookbe.model.Book;

@RestController
public class EbookController {
	@Autowired
	private BookDAO bookDAO;
	
	@GetMapping("/getAllBooks")
	public List<Book> getBooks() {
		return bookDAO.findAll(); 
	}
}
