package com.bvrith.ebook.ebookbe.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @Column(name = "bookid")
    private int bookid;

    @Column(name = "book_name")
    private String book_name;

    @Column(name = "book_price")
    private String book_price;

    @Column(name = "book_details")
    private String book_details;

    public int getBookid() {
        return bookid;
    }

    public void setBookid(int bookid) {
        this.bookid = bookid;
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
