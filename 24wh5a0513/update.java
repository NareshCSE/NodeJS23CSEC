package jdbcconnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

public class update {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/krushini", "root", "1234");

			Statement statement=connection.createStatement();
			String updateQuery = "UPDATE employee SET dept = 'mech' WHERE name = 'venkatesh'";
			int rowsUpdated = statement.executeUpdate(updateQuery);
			System.out.println(rowsUpdated + " row(s) updated.");

			ResultSet rs=statement.executeQuery("select *from employee");

			while(rs.next()) {

				System.out.println(rs.getString("eid")+"\t"+rs.getString("ename")+"\t"+rs.getString("salary")+"\t"+rs.getString("dept"));

				}
			connection.close();

			} catch (Exception e) {
				e.printStackTrace();

			}

}

	}

