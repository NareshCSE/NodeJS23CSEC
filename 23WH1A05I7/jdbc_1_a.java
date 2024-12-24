package jdbc_i7;
import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;

public class jdbc_1_a {

		public static void main(String[]args) 

		{

			try {

				//Step1: register the driver   Student s=new Student()

				//Class.forName("com.mysql.cj.jdbc.Driver");

				DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

				//step2: get the connection object

				Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/i7", "root", "1234");

				//step3: create statement object which is used to send SQL queries to database

				Statement statement=connection.createStatement();

				//step4: execute the query

				ResultSet rs=statement.executeQuery("select *from employee");

				while(rs.next()) {

					System.out.println(rs.getInt("empid")+"\t"+rs.getString("ename")+"\t"+rs.getDouble("salary"));

				}

				//step5: close the connection

				connection.close();

			} catch (Exception e) {

				// TODO Auto-generated catch block

				e.printStackTrace();

			}
		}

	}


