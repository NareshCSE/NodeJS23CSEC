import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.ResultSet;
	import java.sql.Statement;

public class updateInsert {
	

	    public static void main(String[] args) {
	        try {
	            // Register the driver
	            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

	            // Get the connection object
	            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/23wh1a05d1", "root", "1234");

	            // Create statement object
	            Statement statement = connection.createStatement();

	            // Step 1: Insert a new record into the employees table
	            String insertQuery = "INSERT INTO employees (name, position, salary, hire_date) " +
	                                 "VALUES ('Eve Adams', 'Software Engineer', 70000.00, '2022-10-10')";
	            String insertQuery1="INSERT INTO employees(name,position,salary,hire_date)"+"VALUES('Sara','Senior Manager',90000.00,'2023-12-23')";
	            String insertQuery2="INSERT INTO employees(name,position,salary,hire_date)"+"VALUES('Mike','Programmer',12000.00,'2022-12-09')";
	            int rowsInserted = statement.executeUpdate(insertQuery2);
	            if (rowsInserted > 0) {
	                System.out.println("Insertion successful! Rows inserted: " + rowsInserted);
	            } else {
	                System.out.println("No rows were inserted.");
	            }

	            // Step 2: Update a record in the employees table
	            String updateQuery = "UPDATE employees " +
	                                 "SET position = 'Team Leader', salary = 55000.00 " +
	                                 "WHERE name = 'Robert Fortune'";
	            int rowsUpdated = statement.executeUpdate(updateQuery);
	            if (rowsUpdated > 0) {
	                System.out.println("Update successful! Rows affected: " + rowsUpdated);
	            } else {
	                System.out.println("No rows were updated. Check your query conditions.");
	            }

	            // Step 3: Retrieve and display all records from the employees table
	            String selectQuery = "SELECT * FROM employees";
	            ResultSet rs = statement.executeQuery(selectQuery);

	            System.out.println("\nEmployees Table Data:");
	            while (rs.next()) {
	                System.out.println(rs.getString("name") + "\t" +
	                                   rs.getString("position") + "\t" +
	                                   rs.getString("salary") + "\t" +
	                                   rs.getString("hire_date"));
	            }

	            // Close the connection
	            connection.close();

	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
	}


