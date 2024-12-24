package jdbc_i7;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class jdbc_1_c {
    public static void main(String[] args) {
        try {
            // Register the JDBC driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            
            // Establish a connection
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/i7", "root", "1234");
            
            // Create a statement
            Statement statement = connection.createStatement();
            
            // Execute the UPDATE operation
            int rowsUpdated = statement.executeUpdate("UPDATE employee SET salary = 90000.00 WHERE empid = 7");
            
            // Confirm the update
            if (rowsUpdated > 0) {
                System.out.println("Employee record updated successfully.");
            } else {
                System.out.println("No employee found with empid = 7.");
            }
            
            // Retrieve and display all employee records
            ResultSet rs = statement.executeQuery("SELECT * FROM employee");
            System.out.println("EmpID\tName\tSalary");
            while (rs.next()) {
                System.out.println(rs.getInt("empid") + "\t" + rs.getString("ename") + "\t" + rs.getDouble("salary"));
            }
            
            // Close the connection
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
