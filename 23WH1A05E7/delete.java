

package connection;


import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;


public class MySQLDeleteExample {


    public static void main(String[] args) {

        

        String url = "jdbc:mysql://localhost:3306/us"; // Database URL

        String username = "root"; // MySQL username

        String password = "1234"; // MySQL password

        String tableName = "Employees"; // Table name

        

        // SQL query to delete a record

        String deleteQuery = "DELETE FROM " + tableName + " WHERE EmployeeID = 1"; // Delete record with EmployeeID = 8

        

        String selectQuery = "SELECT * FROM " + tableName; // Query to display records

        

        try {

            

            // Load and register the JDBC driver

            Class.forName("com.mysql.cj.jdbc.Driver");

            System.out.println("MySQL JDBC Driver Registered!");

            

            // Establish connection

            Connection connection = DriverManager.getConnection(url, username, password);

            System.out.println("Connection established successfully!");

            

            // Create a statement to execute SQL queries

            Statement statement = connection.createStatement();

            

            // Execute the delete query

            int rowsAffected = statement.executeUpdate(deleteQuery);

            

            // Check if the delete was successful

            if (rowsAffected > 0) {

                System.out.println("Record deleted successfully!");

            } else {

                System.out.println("No record deleted! (Maybe EmployeeID doesn't exist)");

            }

            

            // Execute the select query to display records after deletion

            ResultSet resultSet = statement.executeQuery(selectQuery);

            

            // Display column headers

            int columnCount = resultSet.getMetaData().getColumnCount();

            for (int i = 1; i <= columnCount; i++) {

                System.out.print(resultSet.getMetaData().getColumnName(i) + "\t");

            }

            System.out.println();

            

            // Display rows

            while (resultSet.next()) {

                for (int i = 1; i <= columnCount; i++) {

                    System.out.print(resultSet.getString(i) + "\t");

                }

                System.out.println();

            }

            

            // Close the connection

            connection.close();

            System.out.println("Connection closed.");

            

        } catch (ClassNotFoundException e) {

            System.out.println("JDBC Driver not found!");

            e.printStackTrace();

            

        } catch (SQLException e) {

            System.out.println("Error executing query!");

            e.printStackTrace();

        }

    }

}

	
