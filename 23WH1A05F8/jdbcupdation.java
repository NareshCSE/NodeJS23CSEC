import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;

public class update_jdbc_conndemo {

	public static void main(String[]args) throws SQLException {

		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/db_name","root","1234");

		Statement statement=conn.createStatement();

		String updatequery="Update students set name='harshini' where grade='A'";

		int rowsaffected=statement.executeUpdate(updatequery);

		if(rowsaffected>0) {

			System.out.println(rowsaffected + " rows affected");

		}

		ResultSet rs=statement.executeQuery("select * from students");

		while(rs.next()) {

			System.out.println(rs.getInt("student_id")+"\t"+rs.getString("name")+"\t"+rs.getInt("age")+"\t"+rs.getString("grade"));

		}

		conn.close();	


	}



}
