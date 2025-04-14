
package com.example.library.controller;

import com.example.library.model.Book;
import com.example.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookRepository bookRepository;
    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }


    @GetMapping("/{id}")
    public Optional<Book> getBookById(@PathVariable int id) {
        return bookRepository.findById(id);
    }

   
    @PostMapping
    public Book insertBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }


    @PutMapping("/{id}")
    public Book updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
        updatedBook.setBook_id(id);
        return bookRepository.save(updatedBook);
    }


    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable int id) {
        bookRepository.deleteById(id);
    }
}
