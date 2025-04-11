package com.example.ebook.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {
    
    @Id
    private Long id;
    private String title;
    private String author;
    private String description;
    private String pdfUrl;

    // Constructors, Getters, and Setters

    public Book() {}

    public Book(Long id, String title, String author, String description, String pdfUrl) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.pdfUrl = pdfUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPdfUrl() {
        return pdfUrl;
    }

    public void setPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
    }
}
