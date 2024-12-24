package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class sample2 {

    public static void main(String[] args) {

        try {
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/programs", "root", "1234");
            Statement statement = connection.createStatement();
            String updateQuery = "UPDATE employees SET salary = 60000 WHERE eid = 1";
            int rowsUpdated = statement.executeUpdate(updateQuery);
            if (rowsUpdated > 0) {
                System.out.println("The employee's salary was updated successfully!");
            } else {
                System.out.println("No matching employee found for the update.");
            }
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
