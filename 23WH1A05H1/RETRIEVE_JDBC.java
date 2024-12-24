package mypack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

class RETRIEVE_JDBC {
public static void main(String[] args) {
	try {
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/dbms","root","1234");
		//Statement state=conn.createStatement();
		PreparedStatement ps=conn.prepareStatement("select eid from employ where ename=?");
		ps.setString(1,"Domu");
		ResultSet rs=ps.executeQuery();
		while(rs.next()) {
			
			System.out.println("Eid "+rs.getInt("eid"));
		//	System.out.println("Ename"+rs.getString("ename"));
		}
		conn.close();
	}
	catch(Exception e) {
		System.out.println("Excepttion occured: "+e);
	}
}
}
