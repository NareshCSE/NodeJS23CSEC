package jdbc;
import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;

public class connectionmysql {

	public static void main(String[] args) {
	
				try {

					DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

					Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05i8", "root", "1234");
e

					Statement statement=connection.createStatement();

					//step4: execute the query

					ResultSet rs=statement.executeQuery("select *from employee");

					while(rs.next()) {

						System.out.println(rs.getString("id")+"\t"+rs.getString("name")+"\t"+rs.getString("salary")+"\t");

					}

					//step5: close the connection

					connection.close();

				} catch (Exception e) {

				
					e.printStackTrace();

				}

				

				
	}
}



