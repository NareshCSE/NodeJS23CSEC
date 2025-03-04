ackage Hansini;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Insertion {

    public static void main(String[] args) {
        try {
            // Step 1: Register the driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step 2: Get the connection object
            Connection connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/23wh1a05j1", "root", "1234");

            // Step 3: Create statement object to send SQL queries to the database
            Statement statement = connection.createStatement();

            // INSERT Operation
            String insertQuery = "INSERT INTO employees (empid, ename, salary, dept) " +
                                 "VALUES (11, 'honey', 26000.00, 'EEE')";
            int rowsInserted = statement.executeUpdate(insertQuery);
            if (rowsInserted > 0) {
                System.out.println("A new employee was inserted successfully.");
            }

            // SELECT Operation (Optional to verify the updates)
            System.out.println("\nAfter INSERT:");
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
