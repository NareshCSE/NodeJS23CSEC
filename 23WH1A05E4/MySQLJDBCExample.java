import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;


public class MySQLJDBCExample {


public static void main(String[] args) {

String url = "jdbc:mysql://localhost:3306/e4"; // Replace with your database name

String username = "root"; // Your MySQL username

String password = "1234"; // Your MySQL password

String tableName = "employees"; // Replace with your table name


try {

// Load and register the JDBC driver

Class.forName("com.mysql.cj.jdbc.Driver");

System.out.println("MySQL JDBC Driver Registered!");


// Establish connection

Connection connection = DriverManager.getConnection(url, username, password);

System.out.println("Connection established successfully!");


// Create a statement to execute SQL queries

Statement statement = connection.createStatement();


// Query to fetch all columns from the table

String query = "SELECT * FROM " + tableName;


// Execute the query

ResultSet resultSet = statement.executeQuery(query);


// Print column headers

int columnCount = resultSet.getMetaData().getColumnCount();

for (int i = 1; i <= columnCount; i++) {

System.out.print(resultSet.getMetaData().getColumnName(i) + "\t");

}

System.out.println();


// Print all rows of the result set

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

System.out.println("Error establishing connection!");

e.printStackTrace();

}

}

}
	
