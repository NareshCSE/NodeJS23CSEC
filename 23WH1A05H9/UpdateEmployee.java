package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class UpdateEmployee {
    public static void main(String[] args) {
        // Database connection details
        String url = "jdbc:mysql://localhost:3306/nodejs"; // Database URL
        String username = "root"; // MySQL username
        String password = "1234"; // MySQL password

        // SQL update query
        String updateQuery = "UPDATE employee SET name_of_emp = ?, salary = ? WHERE rollnumber = ?";

        // Scanner for taking input from the user
        Scanner scanner = new Scanner(System.in);

        // Taking inputs for employee details to update
        System.out.print("Enter the roll number of the employee to update: ");
        int rollnumber = scanner.nextInt();

        System.out.print("Enter the new name for the employee: ");
        scanner.nextLine();  // Consume the newline character
        String name_of_emp = scanner.nextLine();

        System.out.print("Enter the new salary for the employee: ");
        int salary = scanner.nextInt();

        // Establishing connection and performing update
        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            // Create a PreparedStatement for executing the update query
            PreparedStatement preparedStatement = connection.prepareStatement(updateQuery);

            // Set the parameters for the prepared statement
            preparedStatement.setString(1, name_of_emp);    // Set name
            preparedStatement.setInt(2, salary);  // Set salary
            preparedStatement.setInt(3, rollnumber); // Set roll number to identify the employee

            // Execute the update query
            int rowsAffected = preparedStatement.executeUpdate();

            // Check if the update was successful
            if (rowsAffected > 0) {
                System.out.println("Employee details updated successfully.");
            } else {
                System.out.println("No employee found with roll number: " + rollnumber);
            }
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        } finally {
            scanner.close();  // Close the scanner
        }
    }
}
