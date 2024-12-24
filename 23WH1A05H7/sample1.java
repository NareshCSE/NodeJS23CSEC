package sample;



import java.sql.Connection; 

import java.sql.DriverManager;  

import java.sql.SQLException; 

import java.sql.Statement;

 

public class sample1{ 

	public static void main(String[]args) {

			try { 

				DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

				Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05h7", "root", "1234"); 

				Statement statement=connection.createStatement(); 

				String insertQuery="INSERT INTO Employee (eid,ename,salary) VALUES (6,'John',25000)";

				int rowsinserted=statement.executeUpdate(insertQuery); 

				if(rowsinserted>0)

				{

					System.out.println("A new employee inserted");

				}

connection.close(); 

}

catch (Exception e) { 

e.printStackTrace(); 

} 

} }

