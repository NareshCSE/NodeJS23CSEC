package jdbc;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class jdbc1c {

	public static void main(String[] args) {
		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05i1","root","1234");
			Statement statement = connection.createStatement();
			//UPDATE OPERATION
			int rowsUpdated=statement.executeUpdate("UPDATE Employee SET salary=100000.00 WHERE empID=1");
			//Confirm the update
			if(rowsUpdated>0) {
				System.out.println("Employee record updated successfully.");
			}
			else {
				 System.out.println("No employee found with empID=1.");
			}
			
            // Retrieve and display the newly inserted data
            ResultSet rs=statement.executeQuery("select *from Employee");

			while(rs.next()) {
				System.out.println(rs.getInt("empID")+"\t"+rs.getString("empName")+"\t"+rs.getDouble("salary"));
			}
            // Close the connection
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
