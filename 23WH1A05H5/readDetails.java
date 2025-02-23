package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

class readDetails {
	public static void main(String[]args) 

	{
		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			

			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/235h5", "root", "1234");

			Statement statement=connection.createStatement();

			ResultSet rs=statement.executeQuery("select *from Employee");

			while(rs.next()) {

				System.out.println(rs.getString("EmployeeID")+"\t"+rs.getString("FirstName")+"\t"+rs.getString("LastName")+"\t"+rs.getString("Email")+"\t"+rs.getString("Hiredate")+"\t"+rs.getString("Department"));
			}

			connection.close();

		} catch (Exception e) {

			e.printStackTrace();

		}
	}
}
