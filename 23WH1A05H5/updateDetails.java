package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class updateDetails {
	public static void main(String[] args) {
		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/235h5", "root", "1234");
			String sql="update employee set department=? where employeeid=?;";
			PreparedStatement statement = con.prepareStatement(sql);
			statement.setString(1,"IT");
			statement.setInt(2, 1);
			int rowsUpdated =statement.executeUpdate();
			if(rowsUpdated>0) {
				System.out.println("Department of Employee 1 is changed to IT");
			}
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
