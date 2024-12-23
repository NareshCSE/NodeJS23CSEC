package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MySQLConnectionExample {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/us";  
        String username = "root";  
        String password = "1234";  
        String tableName = "Employees";  

        try (Connection connection = DriverManager.getConnection(url, username, password);
             Statement statement = connection.createStatement()) {

            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("MySQL JDBC Driver Registered!");

            String query = "SELECT * FROM " + tableName;

            try (ResultSet resultSet = statement.executeQuery(query)) {
                
                int columnCount = resultSet.getMetaData().getColumnCount();
                for (int i = 1; i <= columnCount; i++) {
                    System.out.print(resultSet.getMetaData().getColumnName(i) + "\t");
                }
                System.out.println();
                
                if (!resultSet.isBeforeFirst()) {
                    System.out.println("No data found.");
                } else {
                    while (resultSet.next()) {
                        for (int i = 1; i <= columnCount; i++) {
                            System.out.print(resultSet.getString(i) + "\t");
                        }
                        System.out.println();
                    }
                }
            }

            System.out.println("Connection closed.");

        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found!");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Error establishing connection or executing query!");
            e.printStackTrace();
        }
    }
}
