package com.example.external;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepo;

    // Get all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    // Get employee by ID
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable int id) {
        return employeeRepo.findById(id);
    }

    // Add employee
    @PostMapping
    public Employee addEmployee(@RequestBody Employee emp) {
        return employeeRepo.save(emp);
    }

    // Update employee
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable int id, @RequestBody Employee updatedEmp) {
        return employeeRepo.findById(id).map(emp -> {
            emp.setName(updatedEmp.getName());
            emp.setAddress(updatedEmp.getAddress());
            emp.setSalary(updatedEmp.getSalary());
            return employeeRepo.save(emp);
        }).orElseGet(() -> {
            updatedEmp.setId(id);
            return employeeRepo.save(updatedEmp);
        });
    }

    // Delete employee
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable int id) {
        employeeRepo.deleteById(id);
    }
}
