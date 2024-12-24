package practice;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class CRUD {

	public static void main(String[]args) 

	{

		try {
			//Class.forName("com.mysql.cj.jdbc.Driver");

			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			
			String url = "jdbc:mysql://localhost:3306/23wh1a05f9";
			String username = "root";
			String password = "1234";
			
			Connection connection=DriverManager.getConnection(url,username,password);
			System.out.println("Connection Established Successfully");
			
			Statement statement=connection.createStatement();
			
			ResultSet rs=statement.executeQuery("select *from Employee");
			while(rs.next()) {
				System.out.println("Name:"+rs.getString("name")+"\tSalary:"+rs.getFloat("salary"));
			}
			connection.close();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
	}
}