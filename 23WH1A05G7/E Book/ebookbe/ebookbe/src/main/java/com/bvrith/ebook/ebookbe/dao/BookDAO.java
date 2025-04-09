package com.bvrith.ebook.ebookbe.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bvrith.ebook.ebookbe.model.Book;

public interface BookDAO extends JpaRepository<Book,Integer> {
	Optional<Book> findById(int bookid);

}
