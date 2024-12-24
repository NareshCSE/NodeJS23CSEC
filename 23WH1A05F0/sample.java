package jdbc;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class sample {
	public static void main(String[] args) {
		try {
			//step1:register the driver
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			//step2:get the connection object
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05b0","root","1234");
			//step3:create statement object
			Statement statement = connection.createStatement();
			//step4: execute the query
			// Insert a new record into the nobel_winners table
			String insertQuery = "INSERT INTO nobel_winners (year, category, name, country, profession) " +
			                     "VALUES (2024, 'Peace', 'John Doe', 'USA', 'Activist')";
			int rowsInserted = statement.executeUpdate(insertQuery);
			System.out.println(rowsInserted + " row(s) inserted.");
			
			// Update the country of a specific winner
			String updateQuery = "UPDATE nobel_winners SET country = 'Canada' WHERE name = 'John Doe'";
			int rowsUpdated = statement.executeUpdate(updateQuery);
			System.out.println(rowsUpdated + " row(s) updated.");

			ResultSet rs=statement.executeQuery("select * from nobel_winners");
			while(rs.next()) {
				System.out.println(rs.getInt("year") +'\t'+'\t'+ rs.getString("category")+'\t' +'\t'+rs.getString("name")+'\t'+'\t'+rs.getString("country")+'\t'+'\t'+rs.getString("profession"));
			}
			// Delete a record from the nobel_winners table
			String deleteQuery = "DELETE FROM nobel_winners WHERE name = 'John Doe'";
			int rowsDeleted = statement.executeUpdate(deleteQuery);
			System.out.println(rowsDeleted + " row(s) deleted.");

		}

		catch(Exception e) {
			e.printStackTrace();
		}
}
}
