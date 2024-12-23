import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Sample {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/bha";
        String username = "root";
        String password = "1234";
        String tableName = "sample";

        String insertQuery = "INSERT INTO " + tableName + " (id, sname, rating, age) VALUES (1, 'Alice', 5, 25.5)";
        String updateQuery = "UPDATE " + tableName + " SET rating = 4 WHERE id = 1";
        String deleteQuery = "DELETE FROM " + tableName + " WHERE id = 1";
        String selectQuery = "SELECT * FROM " + tableName;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();

            int rowsAffected = statement.executeUpdate(insertQuery);
            if (rowsAffected > 0) {
                System.out.println("Record inserted successfully!");
            }

            rowsAffected = statement.executeUpdate(updateQuery);
            if (rowsAffected > 0) {
                System.out.println("Record updated successfully!");
            }

            rowsAffected = statement.executeUpdate(deleteQuery);
            if (rowsAffected > 0) {
                System.out.println("Record deleted successfully!");
            }

            ResultSet resultSet = statement.executeQuery(selectQuery);
            int columnCount = resultSet.getMetaData().getColumnCount();
            for (int i = 1; i <= columnCount; i++) {
                System.out.print(resultSet.getMetaData().getColumnName(i) + "\t");
            }
            System.out.println();

            while (resultSet.next()) {
                for (int i = 1; i <= columnCount; i++) {
                    System.out.print(resultSet.getString(i) + "\t");
                }
                System.out.println();
            }

            connection.close();

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}
