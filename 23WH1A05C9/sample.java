//jdbc retrieval process

package sample;

import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;



public class sample {

	public static void main(String[]args) throws SQLException {
        // loading driver class
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

		//connection object

		Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/sample","root","1234");

		
        //statement object
		Statement statement=connection.createStatement();

		
        //executing query
		ResultSet rs=statement.executeQuery("select * from employees");

		//resultset
		while(rs.next()) {

			System.out.println(rs.getString("ename")+"\t"+rs.getInt("eid"));

		}

		connection.close();

		

	}

}











