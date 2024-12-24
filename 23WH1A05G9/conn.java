package proj;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.*;

public class conn {
    public static void main(String[] args) {
   
        try {
            
            Class.forName("com.mysql.cj.jdbc.Driver");
            //DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
          
            String url = "jdbc:mysql://localhost:3306/hi"; 
            String user = "root"; 
            String password = "1234"; 
            
            Connection connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection established successfully!");
            
            Statement statement=connection.createStatement();
            String query ="Select * from emp";
            ResultSet resultset=statement.executeQuery(query);
            while(resultset.next()) {
            	int id = resultset.getInt("id");
                String name=resultset.getString("name");
                int salary=resultset.getInt("salary");
                int experience = resultset.getInt("experience");
                System.out.println("Name: "+ name + " Salary: " +salary);
                
                
            }
            resultset.close();
            statement.close();
            connection.close();

        } catch (ClassNotFoundException e) {
            System.out.println("MySQL JDBC Driver not found.");
           
        } catch (SQLException e) {
            System.out.println("Connection failed!");
           
        } finally {
            System.out.println("");
            }
        }
    }
