package com.bvrith.ebook.ebookbe.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bvrith.ebook.ebookbe.model.Book;

public interface BookDAO extends JpaRepository<Book, Integer>{

}
