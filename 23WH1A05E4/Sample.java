package nodee4;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Sample {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/bha"; // Replace with your database name
        String username = "root"; // Your MySQL username
        String password = "1234"; // Your MySQL password
        String tableName = "sample"; // Replace with your table name

        // Update query to modify a specific record
        String updateQuery = "UPDATE " + tableName + " SET salary = 75000 WHERE id = 1"; // Replace with your column and condition

        try {
            // Load and register the JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("MySQL JDBC Driver Registered!");

            // Establish connection
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connection established successfully!");

            // Create a statement to execute SQL queries
            Statement statement = connection.createStatement();

            // Execute the update query
            int rowsAffected = statement.executeUpdate(updateQuery);

            // Check if the update was successful
            if (rowsAffected > 0) {
                System.out.println("Record updated successfully!");
            } else {
                System.out.println("No record found matching the condition!");
            }

            // Close the connection
            connection.close();
            System.out.println("Connection closed.");

        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found!");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Error executing update query!");
            e.printStackTrace();
        }
    }
}

