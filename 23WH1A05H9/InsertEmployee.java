package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InsertEmployee {
    public static void main(String[] args) {
        // Database connection details
        String url = "jdbc:mysql://localhost:3306/nodejs"; // Your database name
        String username = "root"; // Your MySQL username
        String password = "1234"; // Your MySQL password

        // SQL insert query
        String query = "INSERT INTO employee (rollnumber, name_of_emp, salary) VALUES (?, ?, ?)";

        // Data to insert
        int rollnumber = 231;  // Example roll number
        String name_of_emp = "John Doe";  // Example name
        int salary = 55000;  // Example salary

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            System.out.println("Connection established successfully!");

            // Create a PreparedStatement for inserting data
            try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
                // Set the values for the placeholders in the query
                preparedStatement.setInt(1, rollnumber);
                preparedStatement.setString(2, name_of_emp);
                preparedStatement.setInt(3, salary);

                // Execute the update (insertion)
                int rowsAffected = preparedStatement.executeUpdate();
                
                // Print result
                if (rowsAffected > 0) {
                    System.out.println("Employee inserted successfully!");
                } else {
                    System.out.println("Insertion failed.");
                }
            }

        } catch (SQLException e) {
            System.err.println("SQL Exception: " + e.getMessage());
        }
    }
}
