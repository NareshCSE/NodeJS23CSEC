package JavaPackage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Update {
	public static void main(String[]args) 
	{
		try {
			//Step1: register the driver   Student s=new Student()
			//Class.forName("com.mysql.cj.jdbc.Driver");
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

			//step2: get the connection object
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/sample", "root", "1234");

			//step3: create statement object which is used to send SQL queries to database
			Statement statement=connection.createStatement();

			//step4: execute the query
			int rowsAffected =statement.executeUpdate("update Employee set dept='wk bt' where eid=1");
			System.out.println(rowsAffected+"row(s) updated successfully");
			
			//step5: close the connection
			connection.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
