package com.temp.celia.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.temp.celia.Model.User;
import com.temp.celia.Repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository repo;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<User> getallUsers() {
        return repo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public User addUser(@RequestBody User user) {
        return repo.save(user);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User users = repo.findById(id).orElseThrow();
        users.setName(user.getName());
        users.setEmail(user.getEmail());
        return ResponseEntity.ok(repo.save(users));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
