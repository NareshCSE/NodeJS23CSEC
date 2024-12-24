package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class insertmysql {

	public static void main(String[] args) {
		
		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05i6","root","1234");
			
			Statement statement =connection.createStatement(); 
			String insert = "insert into Employee values (4,'Keerti',300000),(5,'Teja',4000000)";
			
			int rowInserted = statement.executeUpdate(insert);
			System.out.println(rowInserted+"row(s) inserted.");
			
			ResultSet rs = statement.executeQuery("select * from Employee");
			while(rs.next()) {
				System.out.println(rs.getString("empid")+"\t" +rs.getString("sname")+"\t"+rs.getString("salary"));
				
			}
			connection.close();
			}
       catch(Exception e) {
    	   e.printStackTrace();
       }
	}

}
