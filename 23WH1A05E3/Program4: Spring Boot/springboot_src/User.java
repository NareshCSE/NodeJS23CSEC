package com.temp.celia.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String email;
    public User(){

    }
    public Long getId(){
        return id;
    }
    public String getName() {
        // TODO Auto-generated method stub
        return name;
    }
    public String getEmail() {
        // TODO Auto-generated method stub
        return email;
    }
    public void setName(String name) {
        // TODO Auto-generated method stub
        this.name = name;
    }
    public void setEmail(String email) {
        // TODO Auto-generated method stub
        this.email = email;
    }
    
}
