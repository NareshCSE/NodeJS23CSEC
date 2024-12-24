package jdbc_i7;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class jdbc_1_b {
    public static void main(String[] args) {
        try {
            // Register the JDBC driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            
            // Establish a connection
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/i7", "root", "1234");
            
            // Create a statement
            Statement statement = connection.createStatement();
            
            // Execute the INSERT operation
            int rowsInserted = statement.executeUpdate("INSERT INTO employee (empid, ename, salary) VALUES (7, 'Alice', 80000.00)");
            
            // Confirm the insertion
            if (rowsInserted > 0) {
                System.out.println("A new employee record was inserted successfully.");
            }
            ResultSet rs=statement.executeQuery("select *from employee");

			while(rs.next()) {

				System.out.println(rs.getInt("empid")+"\t"+rs.getString("ename")+"\t"+rs.getDouble("salary"));

			}
            // Close the connection

            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
