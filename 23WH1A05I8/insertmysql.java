package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class insertmysql {

	public static void main(String[] args) {
		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/24wh5a0518S","root","1234");
			Statement statement=connection.createStatement();
			String insert="insert into employee (id,name,salary) values(9,'saniya',800000) ";
			int rowsinserted =statement.executeUpdate(insert);
			if (rowsinserted > 0) {
				System.out.println("A new employee record was inserted successfully.");
	            	}
			ResultSet rs = statement.executeQuery("SELECT * FROM employee WHERE id = 9");
	        while (rs.next()) {
	        	System.out.println("Inserted Data:");
	            System.out.println("id: " + rs.getString("id") +", Name: " + rs.getString("name") +", Salary: " + rs.getString("salary"));
	            }
	        connection.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
