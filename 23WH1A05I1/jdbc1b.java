package jdbc;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class jdbc1b {

	public static void main(String[] args) {
		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05i1","root","1234");
			Statement statement = connection.createStatement();
			// Execute the INSERT operation
			int rowsInserted = statement.executeUpdate("INSERT INTO employee (empID, empName, salary) VALUES (7, 'kimicho', 70000.00)");

			// Confirm the insertion
			if (rowsInserted > 0) {
				System.out.println("A new employee record was inserted successfully.");
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
