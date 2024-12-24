package mypack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
public class INSERT_JDBC {
public static void main(String[] args) {
	try {
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/dbms","root","1234");
		PreparedStatement presta =conn.prepareStatement("insert into employ (eid,ename) values(?,?)");
		presta.setInt(1,904);
		presta.setString(2,"Domu");
		int p=presta.executeUpdate();
		System.out.println("Record inserted :"+p);
	}
	catch(Exception e) {
		System.out.println("Exception is "+e);
	}
	
}
}
