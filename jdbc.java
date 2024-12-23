import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;

public class jdbc {
	

		public static void main(String[]args) 

		{

			try {

				//Step1: register the driver  


				DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

				//step2: get the connection object

				Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05d1", "root", "1234");

				//step3: create statement object which is used to send SQL queries to database

				Statement statement=connection.createStatement();

				//step4: execute the query

				ResultSet rs=statement.executeQuery("select *from employees");

				while(rs.next()) {

					System.out.println(rs.getString("name")+"\t"+rs.getString("position")+"\t"+rs.getString("salary")+"\t"+rs.getString("hire_date"));

				}

				//step5: close the connection(this is mandatory)

				connection.close();

			} catch (Exception e) {

				// TODO Auto-generated catch block

				e.printStackTrace();

			}

			

			

		}



	}



