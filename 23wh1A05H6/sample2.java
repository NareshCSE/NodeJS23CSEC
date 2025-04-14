package sample;



import java.sql.Connection; 

import java.sql.DriverManager;  

import java.sql.SQLException; 

import java.sql.Statement;

 

public class sample2{ 

	public static void main(String[]args) {

			try { 

				DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

				Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05h7", "root", "1234"); 

				Statement statement=connection.createStatement(); 

				String updateQuery="UPDATE Employee SET salary=30000 WHERE eid=1";

				int rowsupdated=statement.executeUpdate(updateQuery); 

				if(rowsupdated>0)

				{

					System.out.println("Employee salary updated");

				}

				else {

					System.out.println("No matching employee found");

				}

connection.close(); 

}

catch (Exception e) { 

e.printStackTrace(); 

} 

} }



