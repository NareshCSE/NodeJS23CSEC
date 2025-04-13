package com.bvrith.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bvrith.dao.Dao;
import com.bvrith.demo.model.Book;

@RestController
@RequestMapping("/books")
public class Controller {

    @Autowired
    private Dao bookDoa;

    // GET all books
    @GetMapping
    public List<Book> getAllBooks() {
        return bookDoa.findAll();
    }

    // GET book by ID
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Integer id) {
        Optional<Book> book = bookDoa.findById(id);
        return book.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }

    // POST (Create a new book)
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookDoa.save(book);
    }

    // PUT (Update an existing book)
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody Book bookDetails) {
        Optional<Book> bookOptional = bookDoa.findById(id);

        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
            book.setName(bookDetails.getName());
            book.setPrice(bookDetails.getPrice());
            book.setDetails(bookDetails.getDetails());
            Book updatedBook = bookDoa.save(book);
            return ResponseEntity.ok(updatedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE a book by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Integer id) {
        Optional<Book> bookOptional = bookDoa.findById(id);

        if (bookOptional.isPresent()) {
            bookDoa.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
