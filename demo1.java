package yasasvi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.PreparedStatement;
public class demo1 {

	public static void main(String[]args) 

	{

		try {

			//Step1: register the driver   Student s=new Student()

			//Class.forName("com.mysql.cj.jdbc.Driver");

			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

			//step2: get the connection object

			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05g2", "root", "1234");

			//step3: create statement object which is used to send SQL queries to database

			Statement statement=connection.createStatement();
			
			// inserting using prepared statemnts
			/*String insertValues="INSERT INTO emp (eid,ename,sal)  VALUES(?,?,?) ";
	
			PreparedStatement preparedStatement = connection.prepareStatement(insertValues);
			preparedStatement.setInt(1,101);
			preparedStatement.setString(2, "luke");
			preparedStatement.setDouble(3,90000);
			
			int rowsAffected =preparedStatement.executeUpdate();
			//System.out.println("rows affecet are"+ rowsAffected);
			*/
			
			// update 
			/*String update="UPDATE emp SET sal=? WHERE eid=?";
			PreparedStatement prepstt=connection.prepareStatement(update);
			prepstt.setInt(1,100000);
			prepstt.setInt(2, 3);
			int rowsaff =prepstt.executeUpdate();
			System.out.println("rows affected"+rowsaff);
			*/
			
			// delete
			String del="DELETE FROM emp WHERE eid=? ";
			PreparedStatement pstt=connection.prepareStatement(del);
			pstt.setInt(1, 1);
			int rowsaff= pstt.executeUpdate();
			System.out.println(rowsaff);
			
			//step4: execute the query
			ResultSet rs=statement.executeQuery("select *from emp");

			while(rs.next()) {

				System.out.println(rs.getString("eid")+"\t"+rs.getString("ename")+"\t"+rs.getString("sal"));
			}

			//step5: close the connection

			connection.close();

		} catch (Exception e) {

			// TODO Auto-generated catch block

			e.printStackTrace();
		}
	}
}