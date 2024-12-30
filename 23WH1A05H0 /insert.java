package JavaPackage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Insert {

    public static void main(String[] args) {

        try {
            // Step1: register the driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step2: get the connection object
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sample", "root", "1234");

            // Step3: create statement object which is used to send SQL queries to database
            Statement statement = connection.createStatement();

            // Step4: execute the query
            // Changed to executeUpdate for an INSERT query
            int rowsAffected = statement.executeUpdate("insert into Employee(eid, ename, salary, dept) values(25, 'krunal pandya', 45000, 'all')");
            System.out.println(rowsAffected + " row(s) inserted successfully.");

            // Step5: close the connection
            connection.close();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
