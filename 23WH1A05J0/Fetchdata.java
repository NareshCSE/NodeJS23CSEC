package mypackage;



import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;



public class Fetchdata {

	public static void main(String[]args) 

	{

		try {

			//Step1: register the driver   Student s=new Student()

			//Class.forName("com.mysql.cj.jdbc.Driver");

			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

			//step2: get the connection object

			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydata", "root", "1234");

			//step3: create statement object which is used to send SQL queries to database

			Statement statement=connection.createStatement();

			//step4: execute the query

			ResultSet rs=statement.executeQuery("select *from employees");
			System.out.println("Employee details :\n Employee Id \tEmployee Name \t Salary \tPosition");

			while(rs.next()) {

				System.out.println("\t"+rs.getString("employeeId")+"\t"+rs.getString("employeeName")+"		\t"+rs.getString("employeeSalary")+"\t"+rs.getString("Position"));

			}

			//step5: close the connection

			connection.close();

		} catch (Exception e) {

			// TODO Auto-generated catch block

			e.printStackTrace();

		}

		

		

	}



}

