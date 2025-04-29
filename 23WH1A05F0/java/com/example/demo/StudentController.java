package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000")  // allow React
public class StudentController {

    @Autowired
    private StudentRepository repo;

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return repo.save(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return repo.findAll();
    }
}
