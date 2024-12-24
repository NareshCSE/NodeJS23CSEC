package nodejs.java;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class sample {

	public static void main(String[]args) 

	{

		try {
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05h2", "root", "1234");
			Statement statement=connection.createStatement();
			ResultSet rs=statement.executeQuery("select *from employee1");

			while(rs.next()) {

				System.out.println(rs.getString("sno")+"\t"+rs.getString("name")+"\t"+rs.getString("position")+"\t"+rs.getString("salary"));

			}

			connection.close();

		} catch (Exception e) {

			// TODO Auto-generated catch block

			e.printStackTrace();

		}

	}

}
