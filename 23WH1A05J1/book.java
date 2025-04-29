package com.example.book; 
import jakarta.persistence.*; 
 
@Entity 
public class Book { 
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int id; 
 
    private String name; 
    private double salary; 
    private String address; 
 
    // Getters and Setters 
    public int getId() { return id; } 
    public void setId(int id) { this.id = id; } 
 
    public String getName() { return name; } 
    public void setName(String empname) { this.name = name; } 
 
    public double getSalary() { return salary; } 
    public void setSalary(double salary) { this.salary = salary; } 
 
    public String getAddress() { return address; } 
    public void setAddress(String address) { this.address = address; } 
}
