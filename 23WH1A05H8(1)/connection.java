package nextone;  // This should match your folder structure

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

public class MySQLConnectionDemo {
    public static void main(String[] args) {
        // Database credentials
        String url = "jdbc:mysql://localhost:3306/pooja"; // Replace 'pooja' with your database name
        String user = "root"; // Use the MySQL username, usually 'root' for local installations
        String password = "1234"; // Use your MySQL password

        // SQL query to fetch data
        String query = "SELECT * FROM users"; // Replace 'users' with your table name

        // Connection and JDBC objects
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            // Step 1: Load MySQL JDBC driver (optional, usually auto-loaded)
            Class.forName("com.mysql.cj.jdbc.Driver"); // For MySQL 8.x and later

            // Step 2: Establish the connection
            connection = DriverManager.getConnection(url, user, password);

            // Step 3: Create a statement to execute SQL
            statement = connection.createStatement();

            // Step 4: Execute the query
            resultSet = statement.executeQuery(query);

            // Step 5: Process the result set
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");
                System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email);
            }
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            // Step 6: Clean up resources
            try {
                if (resultSet != null) resultSet.close();
                if (statement != null) statement.close();
                if (connection != null) connection.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
    }
}
