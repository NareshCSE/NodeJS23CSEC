package f2;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class first {

	public static void main(String[] args) {
		
		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection connection =DriverManager.getConnection("jdbc:mysql://localhost:3306/f2","root","1234");
			Statement statement=connection.createStatement();
			ResultSet rs=statement.executeQuery("select * from employees");
			while(rs.next()) {
				System.out.println(rs.getString("empid")+"\t"+rs.getString("name")+"\t"+rs.getString("salary")+"\t");
			
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		// TODO Auto-generated method stub

	}

}
