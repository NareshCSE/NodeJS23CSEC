import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class insertjdbcexample {
	public static void main(String[]args) throws SQLException {
		DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
		
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/sample","root","1234");
		
		Statement statement=conn.createStatement();
		
		String Insertquery="insert into employees values(6,'Harshu','cse',150000)";
		
		int rowsaffected=statement.executeUpdate(Insertquery);
		
		if(rowsaffected>0) {
			System.out.println(rowsaffected + " rows affected");
		}
		
		ResultSet rs=statement.executeQuery("select * from employees");
		
		while(rs.next()) {
			System.out.println(rs.getInt("eid")+"\t"+rs.getString("ename")+"\t"+rs.getString("dept")+"\t"+rs.getInt("salary"));
		}
		conn.close();		
		
	}
}








