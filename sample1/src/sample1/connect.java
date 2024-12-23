package sample1;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class connect {
    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        PreparedStatement preparedStatement = null;

        try {
            // Register MySQL JDBC driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Establish connection to the database
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/5g1", "root", "1234");

            // Create Statement to query data
            statement = connection.createStatement();
            /*
            // Insert values using PreparedStatement (same as before)
            String insertQuery = "INSERT INTO emp (eid, ename, sal) VALUES (?, ?, ?)";
            preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setInt(1, 6);  // Setting the 'eid'
            preparedStatement.setString(2, "John"); // Setting the 'ename'
            preparedStatement.setDouble(3, 75000.00); // Setting the 'sal'
            preparedStatement.executeUpdate();  // Execute the insert
*/
            /*
            // Update Salary (column 6) for employee with eid = 6 using PreparedStatement
            String updateQuery = "UPDATE emp SET sal = ? WHERE eid = ?";
            preparedStatement = connection.prepareStatement(updateQuery);

            // Set the new salary value and eid for the employee to update
            preparedStatement.setDouble(1, 80000.00); // New salary
            preparedStatement.setInt(2, 6); // eid for the employee

            // Execute the update
            preparedStatement.executeUpdate();
            System.out.println("Salary updated for employee with eid = 6.");
*/
            
            String del="DELETE FROM emp WHERE eid=? ";
            PreparedStatement pstt=connection.prepareStatement(del);
            pstt.setInt(1, 1);
            int rowsaff= pstt.executeUpdate();
            System.out.println(rowsaff);
            
            
            // Query to retrieve data from emp table
            ResultSet rs = statement.executeQuery("SELECT * FROM emp");

            // Display the results
            while (rs.next()) {
                System.out.println(rs.getInt("eid") + "\t" + rs.getString("ename") + "\t" + rs.getDouble("sal"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Close resources
            try {
                if (preparedStatement != null) preparedStatement.close();
                if (statement != null) statement.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}


