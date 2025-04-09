package com.bvrith.ebook.ebookbe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getBook/{id}")
    public Book getBookById(@PathVariable int id) {
        Optional<Book> book = bookDAO.findById(id);
        return book.orElse(null); 
    }
}

