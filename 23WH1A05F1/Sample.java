package f1;



import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.Statement;



public class connectionsql {







		public static void main(String[] args){



			//step1:register the driver



			try {



			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());



			//step2: get the connection object



			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/f1","root","1234");



			Statement statement=connection.createStatement();



			//step 4:execute the query



			ResultSet rs=statement.executeQuery("select * from employees");



			while(rs.next()) {



				System.out.println(rs.getString("name")+"\t"+rs.getString("salary")+"\t");



			}



		}

			// step



			catch(Exception e) {



				e.printStackTrace();



			}



		}



	}

