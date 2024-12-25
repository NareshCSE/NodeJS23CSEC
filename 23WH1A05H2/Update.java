package update.java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Update {
	public static void main(String[] args) {
		try{
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05h2","root","1234");
			String sql = "update employee1 set name= ? where name = ?";
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setString(0, "Varshini");
			statement.setString(1,"Mona");
			
			int display = statement.executeUpdate();
			if(display>0) {
				System.out.println("Updated!");
			}
			
			connection.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
}
	
}
