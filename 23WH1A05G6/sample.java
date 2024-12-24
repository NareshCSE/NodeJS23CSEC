package javaa;




import java.util.*;
import java.sql.*;

public class sample {
    public static void main(String[] args) {
   
        try {
            
            Class.forName("com.mysql.cj.jdbc.Driver");
            //DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
          
            String url = "jdbc:mysql://localhost:3306/g6"; 
            String user = "root"; 
            String password = "1234"; 
            
            Connection connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection established successfully!");
            
            Statement statement=connection.createStatement();
            String query ="Select * from employees";
            ResultSet resultset=statement.executeQuery(query);
            while(resultset.next()) {
                String name=resultset.getString("name");
                float salary=resultset.getFloat("salary");
                
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
