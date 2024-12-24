package mypack;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.PreparedStatement;
public class InsertQuery {
public static void main(String [] args)
{
	try {
		//Class.forName("com.mysql.cj.jdbc.Driver");
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		
		String url = "jdbc:mysql://localhost:3306/db";
		String username = "root";
		String password = "1234";
		
		Connection connection=DriverManager.getConnection(url,username,password);
		System.out.println("Connection Established Successfully");
		
		Statement statement=connection.createStatement();	
	statement.executeUpdate("INSERT INTO employee(eid,ename,esalary) \r\n" + 
              "VALUES (6, 'thripthi', 570000);");
		connection.close();
		
	} catch (Exception e) {
		e.printStackTrace();
		
	}
}
}
