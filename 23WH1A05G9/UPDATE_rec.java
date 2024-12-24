package proj;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class update_rec {
	public static void main(String[] args) {
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
        //DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
      
        String url = "jdbc:mysql://localhost:3306/hi"; 
        String user = "root"; 
        String password = "1234"; 
        
        Connection connection = DriverManager.getConnection(url, user, password);
        System.out.println("Connection established successfully!");
        String sql = "UPDATE emp SET id = ?, name = ?, salary = ? WHERE id = ?"; 
        PreparedStatement statement = connection.prepareStatement(sql); 
        statement.setInt(1, 4); 
        statement.setString(2, "harsh"); 
        statement.setInt(3, 4560000); 
        statement.setInt(4, 1); 
        statement.executeUpdate(); 
        System.out.println("Record updated."); 
	}
		catch (Exception e) {
			System.out.println(e);
		}
	}
}
