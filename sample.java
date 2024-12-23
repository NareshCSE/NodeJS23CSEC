/*package yasasvi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class sample {

    public static void main(String[] args) {
        try {
            // Step1: register the driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step2: get the connection object
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05f5", "root", "1234");

            // Step3: create statement object which is used to send SQL queries to database
            Statement statement = connection.createStatement();

            // Step4: execute the query
            ResultSet rs = statement.executeQuery("SELECT year, subject, winner, country FROM nobel_prizes");

            // Step5: process the result set
            while (rs.next()) {
                System.out.println(rs.getString("year") + "\t" + rs.getString("subject") + "\t" + rs.getString("winner") + "\t" + rs.getString("country"));
            }

            // Step6: close the connection
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
package yasasvi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class sample {

    public static void main(String[] args) {
        try {
            // Step1: register the driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step2: get the connection object
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05f5", "root", "1234");

            // Step3: create statement object which is used to send SQL queries to database
            Statement statement = connection.createStatement();

            // Step4: execute the query
            ResultSet rs = statement.executeQuery("SELECT year FROM nobel_prizes");

            // Step5: process the result set
            while (rs.next()) {
                System.out.println(rs.getString("year"));
            }

            // Step6: close the connection
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

package yasasvi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class sample {

    public static void main(String[] args) {
        try {
            
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05f5", "root", "1234");
            String insertQuery = "INSERT INTO nobel_prizes (year, subject, winner, country) VALUES (?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setInt(1, 2025);
            preparedStatement.setString(2, "Physics");
            preparedStatement.setString(3, "Emma Brown");
            preparedStatement.setString(4, "Australia");
            preparedStatement.setInt(1, 2027);
            preparedStatement.setString(2, "Computer  Science");
            preparedStatement.setString(3, "Yasasvi");
            preparedStatement.setString(4, "India");
            
            int rowsAffected = preparedStatement.executeUpdate();
            System.out.println("Rows affected: " + rowsAffected);
            String selectQuery = "SELECT year, subject, winner, country FROM nobel_prizes";
            ResultSet rs = preparedStatement.executeQuery(selectQuery);
            while (rs.next()) {
                System.out.println(rs.getInt("year") + "\t" + rs.getString("subject") + "\t" + rs.getString("winner") + "\t" + rs.getString("country"));
            }

            
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}*/
package yasasvi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class sample {

    public static void main(String[] args) {
        try {
            // Step1: register the driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step2: get the connection object
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05f5", "root", "1234");

            // Step3: create a PreparedStatement object for insertion
            String insertQuery = "INSERT INTO nobel_prizes (year, subject, winner, country) VALUES (?, ?, ?, ?)";
            PreparedStatement insertStatement = connection.prepareStatement(insertQuery);

            // Set the parameters for the insertion
            insertStatement.setInt(1, 2028);
            insertStatement.setString(2, "Computer Science");
            insertStatement.setString(3, "Adifa");
            insertStatement.setString(4, "India");

            // Execute the insertion
            int insertRowsAffected = insertStatement.executeUpdate();
            System.out.println("Insertion - Rows affected: " + insertRowsAffected);

            // Step4: create a PreparedStatement object for update
            String updateQuery = "UPDATE nobel_prizes SET winner = ?, country = ? WHERE year = ? AND subject = ?";
            PreparedStatement updateStatement = connection.prepareStatement(updateQuery);

            // Set the parameters for the update
            updateStatement.setString(1, "Updated Winner");
            updateStatement.setString(2, "Updated Country");
            updateStatement.setInt(3, 2025); // Specify the year
            updateStatement.setString(4, "Physics"); // Specify the subject

            // Execute the update
            int updateRowsAffected = updateStatement.executeUpdate();
            System.out.println("Update - Rows affected: " + updateRowsAffected);

            // Step5: fetch and print the data to verify the insert and update
            String selectQuery = "SELECT year, subject, winner, country FROM nobel_prizes";
            PreparedStatement selectStatement = connection.prepareStatement(selectQuery);
            ResultSet rs = selectStatement.executeQuery();

            while (rs.next()) {
                System.out.println(rs.getInt("year") + "\t" + rs.getString("subject") + "\t" + rs.getString("winner") + "\t" + rs.getString("country"));
            }

            // Step6: close the connection
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}


