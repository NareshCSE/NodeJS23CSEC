package Hansini;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Update {

    public static void main(String[] args) {
        try {
            // Step 1: Register the driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step 2: Get the connection object
            Connection connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/23wh1a05j1", "root", "1234");

            // Step 3: Create statement object to send SQL queries to the database
            Statement statement = connection.createStatement();

            // UPDATE Operation
            String updateQuery = "UPDATE employees SET salary = 90000.00 WHERE empid = 7 ";
            int rowsUpdated = statement.executeUpdate(updateQuery);
            if (rowsUpdated > 0) {
                System.out.println("Employee salary updated successfully.");
            }

            // SELECT Operation (Optional to verify the updates)
            System.out.println("\nAfter UPDATE:");
            ResultSet rs = statement.executeQuery("SELECT * FROM employees");
            System.out.println("EmpID\tEname\tSalary\tDept");
            System.out.println("------------------------------------");
            while (rs.next()) {
                System.out.println(
                    rs.getString("empid") + "\t" +
                    rs.getString("ename") + "\t" +
                    rs.getString("salary") + "\t" +
                    rs.getString("dept"));
            }

            // Step 4: Close the connection
            connection.close();

        } catch (SQLException e) {
            System.out.println("Database connection or query execution failed!");
            e.printStackTrace();
        }
    }
}
