package mypack;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
public class RetrieveData
{
	public static void main(String[] args) {
		try {
			//Class.forName("com.mysql.cj.jdbc.Driver");
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			
			String url = "jdbc:mysql://localhost:3306/db";
			String username = "root";
			String password = "1234";
			
			Connection connection=DriverManager.getConnection(url,username,password);
			System.out.println("Connection Established Successfully");
			
			Statement statement=connection.createStatement();
			
			ResultSet rs=statement.executeQuery("select *from Employee");
			while(rs.next()) {
				System.out.println("id:"+rs.getString("eid")+"Name:"+rs.getString("ename")+"\tSalary:"+rs.getFloat("esalary"));
			}
			connection.close();
		} catch (Exception e) {
			e.printStackTrace();
			
		}
	}
	
}
