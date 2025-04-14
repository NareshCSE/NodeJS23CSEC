package com.bvrith.demo.model;
import jakarta.persistence.*;
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Integer id;
    @Column(name = "book_name")
    private String name; 
    @Column(name = "book_price")
    private Integer price; 
    @Column(name = "book_details")
    private String details;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getPrice() {
        return price;
    }
    public void setPrice(Integer price) {
      this.price = price;
    }
    public String getDetails() {
      return details;
    }
    public void setDetails(String details) {
        this.details = details;
    }
}
