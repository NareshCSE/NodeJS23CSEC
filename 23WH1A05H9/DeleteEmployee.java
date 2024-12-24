package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class DeleteEmployee {
    public static void main(String[] args) {
        // Database connection details
        String url = "jdbc:mysql://localhost:3306/nodejs"; // Database URL
        String username = "root"; // MySQL username
        String password = "1234"; // MySQL password

        // SQL delete query
        String deleteQuery = "DELETE FROM employee WHERE rollnumber = ?";

        // Scanner for taking input from the user
        Scanner scanner = new Scanner(System.in);

        // Taking input for the roll_number to delete
        System.out.print("Enter the roll number of the employee to delete: ");
        int rollnumberToDelete = scanner.nextInt();

        // Establishing connection and performing delete
        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            // Create a PreparedStatement for executing the delete query
            PreparedStatement preparedStatement = connection.prepareStatement(deleteQuery);

            // Set the parameter for the prepared statement (the roll number)
            preparedStatement.setInt(1, rollnumberToDelete);

            // Execute the delete query
            int rowsAffected = preparedStatement.executeUpdate();

            // Check if the delete was successful
            if (rowsAffected > 0) {
                System.out.println("Employee with roll number " + rollnumberToDelete + " deleted successfully.");
            } else {
                System.out.println("No employee found with roll number: " + rollnumberToDelete);
            }
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        } finally {
            scanner.close();  // Close the scanner
        }
    }
}
