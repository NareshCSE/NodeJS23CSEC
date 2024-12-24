package jdbc;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class insertmysql {

    public static void main(String[] args) {
        try {
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05i2", "root", "1234");
            Statement statement = connection.createStatement();
            
            String insertQuery = "INSERT INTO Employee (eid, ename, salary) " +
                                 "VALUES (4, 'Teja', 200000.00)";
            int rowsInserted = statement.executeUpdate(insertQuery);
            System.out.println(rowsInserted + " row(s) inserted.");
            
            ResultSet rs = statement.executeQuery("SELECT * FROM Employee");
            while (rs.next()) {
                System.out.println(rs.getString("eid") + "\t" +rs.getString("ename") + "\t" +rs.getString("salary"));
            }
            
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
