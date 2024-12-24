package mypro;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class insert 
{

    public static void main(String[] args) 
    {
        String url = "jdbc:mysql://localhost:3306/5i9"; 
        String username = "root";
        String password = "1234";
        String insertQuery = "INSERT INTO employees (emp_name, emp_id, emp_dept) VALUES (?, ?, ?)";
        try (Connection conn = DriverManager.getConnection(url, username, password);
             PreparedStatement pstmt = conn.prepareStatement(insertQuery)) 
        {
            pstmt.setString(1, "nani");  
            pstmt.setInt(2, 6);          
            pstmt.setString(3, "it");     
            int rowsAffected = pstmt.executeUpdate();
            System.out.println(rowsAffected + " row inserted.");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
