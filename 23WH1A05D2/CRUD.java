import java.sql.*;

public class CRUD {
    public static void main(String[] args) {
        try {
            // Register MySQL Driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Database connection details
            String url = "jdbc:mysql://localhost:3306/23wh1a05d2";
            String username = "root";
            String password = "1234";

            // Connect to database
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connection Established Successfully");

            Statement statement = connection.createStatement();

            // 1. CREATE (Insert a new Employee)
            String insertQuery = "INSERT INTO Employee (name, salary) VALUES ('John Doe', 50000)";
            int rowsInserted = statement.executeUpdate(insertQuery);
            System.out.println(rowsInserted + " record(s) inserted.");

            // 2. READ (Display all Employees)
            String selectQuery = "SELECT * FROM Employee";
            ResultSet rs = statement.executeQuery(selectQuery);
            System.out.println("\nEmployee Records:");
            while (rs.next()) {
                System.out.println("Name: " + rs.getString("name") + "\tSalary: " + rs.getFloat("salary"));
            }

            // 3. UPDATE (Update an Employee's Salary)
            String updateQuery = "UPDATE Employee SET salary = 60000 WHERE name = 'John Doe'";
            int rowsUpdated = statement.executeUpdate(updateQuery);
            System.out.println("\n" + rowsUpdated + " record(s) updated.");

            // 4. DELETE (Delete an Employee)
            String deleteQuery = "DELETE FROM Employee WHERE name = 'John Doe'";
            int rowsDeleted = statement.executeUpdate(deleteQuery);
            System.out.println("\n" + rowsDeleted + " record(s) deleted.");

            // Close connection
            connection.close();
            System.out.println("\nConnection Closed Successfully");
        } 
	catch (Exception e) {
            e.printStackTrace();
        }
    }
}
