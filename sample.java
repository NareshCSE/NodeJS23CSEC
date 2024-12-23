/*creation jdbc*/
/*
package javas;

import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.ResultSet;

import java.sql.SQLException;

import java.sql.Statement;

public class sample {

	public static void main(String[]args) 

	{
		try {
			//Step1: register the driver   Student s=new Student()

			//Class.forName("com.mysql.cj.jdbc.Driver");

			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

			//step2: get the connection object

			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05g3", "root", "1234");

			//step3: create statement object which is used to send SQL queries to database

			Statement statement=connection.createStatement();

			//step4: execute the query

			ResultSet rs=statement.executeQuery("select *from Students");

			while(rs.next()) {

				System.out.println(rs.getString("StudentID")+"\t"+rs.getString("FirstName")+"\t"+rs.getString("LastName")+"\t"+rs.getString("BirthDate")+"\t"+rs.getString("Email"));

			}

			//step5: close the connection

			connection.close();

		} catch (Exception e) {

			// TODO Auto-generated catch block

			e.printStackTrace();

		}

	}

}

*/
/*insertion*/
/*
package javas;

import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.PreparedStatement;

import java.sql.ResultSet;

import java.sql.SQLException;

public class sample {

    public static void main(String[] args) {
        try {

            // Step1: Register the driver

            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step2: Get the connection object

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05g3", "root", "1234");

            // Step3: Create a PreparedStatement object

            String insertQuery = "INSERT INTO Students (StudentID, FirstName, LastName, BirthDate, Email) VALUES (?, ?, ?, ?, ?)";

            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);

            // Step4: Set the parameters
            
            preparedStatement.setInt(1, 4);

            preparedStatement.setString(2, "lakshmi");

            preparedStatement.setString(3, "yasasvi");

            preparedStatement.setString(4, "2005-04-05");

            preparedStatement.setString(5, "yasasvi@gmail.com");

            preparedStatement.setInt(1, 5);
            
            preparedStatement.setString(2, "adifa");

            preparedStatement.setString(3, "saniya");

            preparedStatement.setString(4, "2005-08-27");

            preparedStatement.setString(5, "adifasaniya@gmail.com");

            // Step5: Execute the update
            
            int rowsAffected = preparedStatement.executeUpdate();

            System.out.println("Rows affected: " + rowsAffected);

            // Fetch and print the data to verify the insert

            String selectQuery = "SELECT * FROM Students";

            ResultSet rs = preparedStatement.executeQuery(selectQuery);

            while (rs.next()) {

				System.out.println(rs.getString("StudentID")+"\t"+rs.getString("FirstName")+"\t"+rs.getString("LastName")+"\t"+rs.getString("BirthDate")+"\t"+rs.getString("Email"));

            }

            // Step6: Close the connection

            connection.close();

        } catch (SQLException e) {

        	e.printStackTrace();

        }

    }

}  

*/
/* insert and update */

package javas;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class sample {

    public static void main(String[] args) {
        try {
            // Step1: register the driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Step2: get the connection object
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05g3", "root", "1234");

            // Step3: create a PreparedStatement object for insertion
            String insertQuery = "INSERT INTO Students (StudentID, FirstName, LastName, BirthDate, Email) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement insertStatement = connection.prepareStatement(insertQuery);

            // Set the parameters for the insertion
            insertStatement.setInt(1, 11);
            insertStatement.setString(2, "me");
            insertStatement.setString(3, "you");
            insertStatement.setString(4, "2005-05-03");
            insertStatement.setString(5, "me.you@gmail.com");

            // Execute the insertion
            int insertRowsAffected = insertStatement.executeUpdate();
            System.out.println("Insertion - Rows affected: " + insertRowsAffected);

            // Step4: create a PreparedStatement object for update
            String updateQuery = "UPDATE Students SET StudentID = ?, FirstName = ?, LastName = ?, BirthDate = ? WHERE Email = ?";
            PreparedStatement updateStatement = connection.prepareStatement(updateQuery);

            // Set the parameters for the update
            updateStatement.setInt(1, 7);
            updateStatement.setString(2, "bangtan");
            updateStatement.setString(3, "Soneyeondan");
            updateStatement.setString(4, "2013-06-13");
            updateStatement.setString(5, "michael.brown@example.com");

            // Execute the update
            int updateRowsAffected = updateStatement.executeUpdate();
            System.out.println("Update - Rows affected: " + updateRowsAffected);

            // Step5: fetch and print the data to verify the insert and update
            String selectQuery = "SELECT * FROM Students";
            PreparedStatement selectStatement = connection.prepareStatement(selectQuery);
            ResultSet rs = selectStatement.executeQuery();

            while (rs.next()) {
                System.out.println(rs.getString("StudentID") + "\t" + rs.getString("FirstName") + "\t" + rs.getString("LastName") + "\t" + rs.getString("BirthDate") + "\t" + rs.getString("Email"));
            }

            // Step6: close the connection
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
