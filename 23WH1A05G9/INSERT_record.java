package proj;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class goo {
	public static void main(String[] args) {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
        //DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
      
        String url = "jdbc:mysql://localhost:3306/hi"; 
        String user = "root"; 
        String password = "1234"; 
        
        Connection connection = DriverManager.getConnection(url, user, password);
        System.out.println("Connection established successfully!");
		String sql ="INSERT INTO emp (id,name,salary) values (?,?,?)";

		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setInt(1,7);
		statement.setString(2,"sharma");
		statement.setInt(3,100000000);
		statement.execute();
	}
	catch (Exception e){
		e.printStackTrace();
	}
}
}
