package com.bvrith.ebook.ebookbe.controller;

import com.bvrith.ebook.ebookbe.dao.BookDAO;
import com.bvrith.ebook.ebookbe.model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class EbookController {

    @Autowired
    private BookDAO bookDAO;

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookDAO.findAll();
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id) {
        Optional<Book> book = bookDAO.findById(id);
        return book.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) {
        return bookDAO.save(book);
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
        return bookDAO.findById(id).map(book -> {
            book.setBook_name(updatedBook.getBook_name());
            book.setBook_price(updatedBook.getBook_price());
            book.setBook_details(updatedBook.getBook_details());
            return ResponseEntity.ok(bookDAO.save(book));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable int id) {
        if (bookDAO.existsById(id)) {
            bookDAO.deleteById(id);
            return ResponseEntity.ok("Book with ID " + id + " deleted.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
