package LabExps;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;



public class sample {

	public static void main(String[]args) 

	{

		try {

			//Step1: register the driver   Student s=new Student()
			//Class.forName("com.mysql.cj.jdbc.Driver");
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			//step2: get the connection object
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/newbase", "root", "1234");
			//step3: create statement object which is used to send SQL queries to database

			Statement statement=connection.createStatement();

			//step4: execute the query
			//UPDATE
	        //String updateSQL = "UPDATE nobel SET years = 1979 WHERE years = 1970";
            //int rowsUpdated = statement.executeUpdate(updateSQL);
            //System.out.println(rowsUpdated + " row(s) updated!");
            //INSERT
           
			String insertQuery1 = "INSERT INTO nobel (years, sub, winner, country) VALUES (2030,'Biology','SATHVIKA','North Korea')";
            statement.executeUpdate(insertQuery1);

            String insertQuery = "INSERT INTO nobel (years, sub, winner, country) VALUES (?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);

            // Step4: Set the parameters
            preparedStatement.setInt(1, 2025);
            preparedStatement.setString(2, "Physics");
            preparedStatement.setString(3, "Emma Brown");
            preparedStatement.setString(4, "Australia");


            // Step5: Execute the update
            int rowsAffected = preparedStatement.executeUpdate();
            System.out.println("Rows affected: " + rowsAffected);
            ResultSet rs=statement.executeQuery("select * from nobel");
			while(rs.next()) {
				System.out.println(rs.getString("years")+"\t"+rs.getString("Sub")+"\t"+rs.getString("winner")+"\t"+rs.getString("country"));

			}

			//step5: close the connection

			connection.close();

		} catch (Exception e) {

			// TODO Auto-generated catch block

			e.printStackTrace();

		}

		

		

	}



}

