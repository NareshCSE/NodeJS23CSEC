package nodee4;

import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;



public class MySQLConnectionExample {
	    public static void main(String[] args) {

	        String url = "jdbc:mysql://localhost:3306/e4"; // Replace with your database name
	        String username = "root"; // Your MySQL username
	        String password = "1234"; // Your MySQL password
	        String tableName = "emp"; // Replace with your table name

	   
	        String sql = "INSERT INTO emp VALUES(5,'ranga')"; // Replace with your column and condition

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
	            statement.executeUpdate(sql);
	            ResultSet rs = statement.executeQuery("select * from emp");
	            
	            // Close the connection
	            connection.close();
	            System.out.println("Connection closed.");

	        } catch (ClassNotFoundException e) {
	            System.out.println("JDBC Driver not found!");
	            e.printStackTrace();
	        } 
	        catch (SQLException se) {
	            System.out.println("JDBC Driver not found!");
	            se.printStackTrace();
	        } 
	    }
}