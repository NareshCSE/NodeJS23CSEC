// src/main/java/com/example/library/model/Book.java
package com.example.library.model;

import jakarta.persistence.*;

@Entity
@Table(name = "book")
public class Book {
    @Id
    private int book_id;
    
    private String book_name;
    private String book_price;
    
    @Column(columnDefinition = "TEXT")
    private String book_details;

    // Getters and Setters
    public int getBook_id() {
        return book_id;
    }
    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }
    public String getBook_name() {
        return book_name;
    }
    public void setBook_name(String book_name) {
        this.book_name = book_name;
    }
    public String getBook_price() {
        return book_price;
    }
    public void setBook_price(String book_price) {
        this.book_price = book_price;
    }
    public String getBook_details() {
        return book_details;
    }
    public void setBook_details(String book_details) {
        this.book_details = book_details;
    }
}
