package mypack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class UPDATE_JDBC {
public static void main(String[] args) {
	try {
	DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/dbms","root","1234");
	PreparedStatement ps=con.prepareStatement("update employ set ename=?,eid=? where ename like ?");
	ps.setString(1,"Ram");
	ps.setInt(2,114);
	ps.setString(3,"%am%");
	int num=ps.executeUpdate();
	System.out.println("Number of records updated: "+num);
}
	catch(Exception e) {
		System.out.println("Exception is"+e);
	}
}
}
