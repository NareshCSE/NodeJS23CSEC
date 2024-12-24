package mypack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class DELETE_JDBC {
public static void main(String[] args) {
	try {
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		Connection co=DriverManager.getConnection("jdbc:mysql://localhost:3306/dbms","root","1234");
		PreparedStatement ps=co.prepareStatement("delete from employ where ename=?");
		ps.setString(1, "Ram");
		int n=ps.executeUpdate();
		System.out.println("Records updated are : "+n);
	}
	catch(Exception e) {
		System.out.println("Exception :"+e);
	}
}
}
