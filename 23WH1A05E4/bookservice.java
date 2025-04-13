package com.example.ebook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepo repo;

    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    public Book getBook(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Book addBook(Book book) {
        return repo.save(book);
    }

    public Book updateBook(Long id, Book updatedBook) {
        Book book = getBook(id);
        if (book != null) {
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            book.setDesc(updatedBook.getDesc());
            return repo.save(book);
        }
        return null;
    }

    public void deleteBook(Long id) {
        repo.deleteById(id);
    }
}
