package myproject;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class update {
public static void main(String[] args)

{
try {

DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "1234");
Statement statement=connection.createStatement();

			String updateQuery = "UPDATE employee SET role = 'Manager' WHERE ename = 'Teja'";
			int rowsUpdated = statement.executeUpdate(updateQuery);
			System.out.println(rowsUpdated + " row(s) updated.");

ResultSet rs=statement.executeQuery("select *from employee");

while(rs.next()) {

System.out.println(rs.getString("eid")+"\t"+rs.getString("ename")+"\t"+rs.getString("salary")+"\t"+rs.getString("role"));

}
connection.close();

} catch (Exception e) {

e.printStackTrace();

}
}
}

