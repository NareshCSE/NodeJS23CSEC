package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class sample1 {

    public static void main(String[] args) {

        try {
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/programs", "root", "1234");
            Statement statement = connection.createStatement();
            String insertQuery = "INSERT INTO employees (eid, ename, salary) VALUES (101, 'John Doe', 50000)";
            int rowsInserted = statement.executeUpdate(insertQuery);
            if (rowsInserted > 0) {
                System.out.println("A new employee was inserted successfully!");
            }
                connection.close();  
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

