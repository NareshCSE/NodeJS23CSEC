package com.example.book;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookRepository bookRepo;

    // I) Get all books
    @GetMapping("/getAllBooks")
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    // II) Get book by ID
    @GetMapping("/getBookById/{id}")
    public Optional<Book> getBookById(@PathVariable int id) {
        return bookRepo.findById(id);
    }

    // III-a) Add book
    @PostMapping("/addBook")
    public Book addBook(@RequestBody Book book) {
        return bookRepo.save(book);
    }

    // III-b) Update book
    @PutMapping("/updateBook/{id}")
    public Book updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
        return bookRepo.findById(id).map(book -> {
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            book.setPrice(updatedBook.getPrice());
            return bookRepo.save(book);
        }).orElseGet(() -> {
            updatedBook.setId(id);
            return bookRepo.save(updatedBook);
        });
    }

    // III-c) Delete book
    @DeleteMapping("/deleteBook/{id}")
    public void deleteBook(@PathVariable int id) {
        bookRepo.deleteById(id);
    }
}
