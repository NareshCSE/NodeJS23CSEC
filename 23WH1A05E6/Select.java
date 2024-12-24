package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class MySQLConnectionExample {
public static void main(String[] args) {


// Database connection details
String url = "jdbc:mysql://localhost:3306/us"; // Replace with your database name
String username = "root"; // Your MySQL username
String password = "1234"; // Your MySQL password
String tableName = "Employees"; // Replace with your table name

// Try-with-resources ensures that the resources are automatically closed
try (Connection connection = DriverManager.getConnection(url, username, password);
Statement statement = connection.createStatement()) {

// Load and register the JDBC driver
Class.forName("com.mysql.cj.jdbc.Driver");
System.out.println("MySQL JDBC Driver Registered!");
  
// Create the query
String query = "SELECT * FROM " + tableName;

// Execute the query and get the result set
try (ResultSet resultSet = statement.executeQuery(query)) {

// Print column headers
int columnCount = resultSet.getMetaData().getColumnCount();
for (int i = 1; i <= columnCount; i++) {
System.out.print(resultSet.getMetaData().getColumnName(i) + "\t");
}
System.out.println();

// Print all rows of the result set
if (!resultSet.isBeforeFirst()) {
System.out.println("No data found.");
} else {
while (resultSet.next()) {
for (int i = 1; i <= columnCount; i++) {
System.out.print(resultSet.getString(i) + "\t");
}
System.out.println();
}
}
}

// Connection will be automatically closed after the try-with-resources block

System.out.println("Connection closed.");
} catch (ClassNotFoundException e){
System.out.println("JDBC Driver not found!");
e.printStackTrace();
} catch (SQLException e) {
System.out.println("Error establishing connection or executing query!");
e.printStackTrace();
}
}
}