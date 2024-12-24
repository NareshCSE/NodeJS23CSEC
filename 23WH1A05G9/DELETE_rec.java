package proj;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class delete_rec {
	public static void main(String[] args) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
	        //DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
	      
	        String url = "jdbc:mysql://localhost:3306/hi"; 
	        String user = "root"; 
	        String password = "1234"; 
	        
	        Connection connection = DriverManager.getConnection(url, user, password);
	        System.out.println("Connection established successfully!");
	        String sql = "DELETE FROM emp WHERE id = ?"; 
	        PreparedStatement statement = connection.prepareStatement(sql); 
	        statement.setInt(1, 3); 
	        statement.executeUpdate(); 
	        System.out.println("Record deleted."); 
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}

}
