package js.connection;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class MySQLInsertExample{
    public static void main(String[] args){
        String url="jdbc:mysql://localhost:3306/23wh1a05h3"; 
        String username="root";
        String password="1234"; 
        String tableName="Employee"; 
        String insertQuery="INSERT INTO "+tableName+" (EmployeeID,FirstName,LastName,Department,Salary) VALUES (8,'kim','som','IT',5000.00)";
        String selectQuery="SELECT * FROM "+tableName;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("MySQL JDBC Driver Registered!");
            Connection connection=DriverManager.getConnection(url,username,password);
            System.out.println("Connection established successfully!");
            Statement statement=connection.createStatement();
            int rowsAffected=statement.executeUpdate(insertQuery);
            if(rowsAffected>0){
                System.out.println("Record inserted successfully!");
            }else{
                System.out.println("No record inserted!");
            }
            ResultSet resultSet=statement.executeQuery(selectQuery);
            int columnCount=resultSet.getMetaData().getColumnCount();
            for(int i=1;i<=columnCount;i++){
                System.out.print(resultSet.getMetaData().getColumnName(i)+"\t");
            }
            System.out.println();
            while(resultSet.next()){
                for(int i=1;i<=columnCount;i++){
                    System.out.print(resultSet.getString(i)+"\t");
                }
                System.out.println();
            }
            connection.close();
            System.out.println("Connection closed.");
        }catch(ClassNotFoundException e){
            System.out.println("JDBC Driver not found!");
            e.printStackTrace();
        }catch(SQLException e){
            System.out.println("Error executing query!");
            e.printStackTrace();
        }
    }
}
