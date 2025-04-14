package com.temp.celia.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.temp.celia.Model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
    
}
