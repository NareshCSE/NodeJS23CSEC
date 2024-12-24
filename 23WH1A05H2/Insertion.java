package nodejs.java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class inserting {
	public static void main(String[] args) {
		
		try{
			// 1. register the driver
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		
	//2. get the connection object
		Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05h2","root","1234");
		String sql = "insert into employee1 values(?, ?, ?,?)";
		PreparedStatement statement = connection.prepareStatement(sql); 
		statement.setInt(1, 7);
		statement.setString(2, "Mona");
		statement.setString(3, "Head");
		statement.setInt(4, 200000);
		
		int display = statement.executeUpdate();
		if (display>0) {
			System.out.println("inserted! ");
		}
		connection.close();
		 
		}
		
		 catch (Exception e) {

				// TODO Auto-generated catch block

				e.printStackTrace();

			}
	}
}
