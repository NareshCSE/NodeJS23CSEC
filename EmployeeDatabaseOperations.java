package practice;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class EmployeeDatabaseOperations {

    // Database credentials
    static final String DB_URL = "jdbc:mysql://localhost:3306/23wh1a05d5";
    static final String USER = "root";
    static final String PASS = "1234";

    // Establish connection to the database
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, USER, PASS);
    }

    // Insert operation
    public static void insertEmployee(String firstName, String lastName) {
        String insertQuery = "INSERT INTO employees (first_name, last_name) VALUES (?, ?)";
        
        try (Connection conn = getConnection(); 
             PreparedStatement stmt = conn.prepareStatement(insertQuery)) {
             
            stmt.setString(1, firstName);
            stmt.setString(2, lastName);
            
            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " record(s) inserted.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Update operation
    public static void updateEmployee(int employeeId, String newFirstName, String newLastName) {
        String updateQuery = "UPDATE employees SET first_name = ?, last_name = ? WHERE employee_id = ?";
        
        try (Connection conn = getConnection(); 
             PreparedStatement stmt = conn.prepareStatement(updateQuery)) {
             
            stmt.setString(1, newFirstName);
            stmt.setString(2, newLastName);
            stmt.setInt(3, employeeId);
            
            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " record(s) updated.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Delete operation
    public static void deleteEmployee(int employeeId) {
        String deleteQuery = "DELETE FROM employees WHERE employee_id = ?";
        
        try (Connection conn = getConnection(); 
             PreparedStatement stmt = conn.prepareStatement(deleteQuery)) {
             
            stmt.setInt(1, employeeId);
            
            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " record(s) deleted.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        // Insert a new employee
        insertEmployee("John", "Doe");

        // Update an existing employee (assuming employee_id = 1)
        updateEmployee(1, "Johnny", "Doe");

        // Delete an employee (assuming employee_id = 1)
        deleteEmployee(1);
    }
}
