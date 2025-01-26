package practice;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class EmployeeDatabaseOperations {

    static final String DB_URL = "jdbc:mysql://localhost:3306/23wh1a05f9";
    static final String USER = "root";
    static final String PASS = "1234";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, USER, PASS);
    }

    public static void insertEmployee(String name, float salary) {
        String insertQuery = "INSERT INTO Employee (name, salary) VALUES (?, ?)";
        try (Connection conn = getConnection(); 
             PreparedStatement stmt = conn.prepareStatement(insertQuery)) {
            stmt.setString(1, name);
            stmt.setFloat(2, salary);
            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " record(s) inserted.");
        } catch (SQLException e) {
            System.err.println("Error inserting employee: " + e.getMessage());
        }
    }

    public static void updateEmployee(String oldName, String newName, float newSalary) {
        String updateQuery = "UPDATE Employee SET name = ?, salary = ? WHERE name = ?";
        try (Connection conn = getConnection(); 
             PreparedStatement stmt = conn.prepareStatement(updateQuery)) {
            stmt.setString(1, newName);
            stmt.setFloat(2, newSalary);
            stmt.setString(3, oldName);
            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " record(s) updated.");
        } catch (SQLException e) {
            System.err.println("Error updating employee: " + e.getMessage());
        }
    }

    public static void deleteEmployee(float salary) {
        String deleteQuery = "DELETE FROM Employee WHERE salary = ?";
        try (Connection conn = getConnection(); 
             PreparedStatement stmt = conn.prepareStatement(deleteQuery)) {
            stmt.setFloat(1, salary);
            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " record(s) deleted.");
        } catch (SQLException e) {
            System.err.println("Error deleting employee: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        insertEmployee("Shivani", 60000);
        insertEmployee("Aishwarya", 50000);
        updateEmployee("Shivani", "Nithya", 65000);
        deleteEmployee(50000);
    }
}
