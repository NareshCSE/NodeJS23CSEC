package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



public class sample {

	public static void main(String[]args) 

	{

		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/programs", "root", "1234");
			Statement statement=connection.createStatement();
			ResultSet rs=statement.executeQuery("select *from employees");
			while(rs.next()) {
				System.out.println(rs.getInt("eid")+"\t"+rs.getString("ename")+"\t"+rs.getInt("salary"));
			}
			connection.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
