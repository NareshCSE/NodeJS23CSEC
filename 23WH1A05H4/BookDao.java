package com.bvrith.ebook.ebookbe.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import com.bvrith.ebook.ebookbe.model.Book;



public interface BookDao extends JpaRepository<Book, Integer> {

}

