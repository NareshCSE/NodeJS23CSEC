package com.bvrith.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bvrith.demo.model.Book;



public interface Dao extends JpaRepository<Book, Integer> {

}
