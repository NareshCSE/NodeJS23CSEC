package connection;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class insertDetails {
	public static void main(String[] args) {
		try {
			Date date = new Date(20090629);
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/235h5", "root", "1234");
			String sql="insert into employee values(?,?,?,?,?,?)";
			PreparedStatement statement = con.prepareStatement(sql);
			statement.setInt(1, 4);
			statement.setString(2,"Sherlock");
			statement.setString(3, "Holmes");
			statement.setString(4, "holmes@gmail.com");
			statement.setDate(5,date);
			statement.setString(6,"Sales");
			int rowsInsert=statement.executeUpdate();
			if(rowsInsert>0) {
				System.out.println("1 row inserted");
			}
			con.close();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
