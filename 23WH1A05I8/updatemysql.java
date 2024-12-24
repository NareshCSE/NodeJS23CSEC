package jdbc;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


public class updatemysql {

	public static void main(String[] args) {
		
				try {
					DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
					Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05i8","root","1234");
					Statement statement=connection.createStatement();
					
					
					String updateQuery = "UPDATE employee SET salary = 50000 WHERE name = 'srividya'";
					int rowsUpdated = statement.executeUpdate(updateQuery);
					System.out.println(rowsUpdated + " row(s) updated.");
					
					
				
					ResultSet rs = statement.executeQuery("SELECT * FROM employee");
			        while (rs.next()) {
			        
			            System.out.println("id: " + rs.getString("id") +", Name: " + rs.getString("name") +", Salary: " + rs.getString("salary"));
			            }
			        connection.close();
				}catch(Exception e) {
					e.printStackTrace();
				}
			}

		}


