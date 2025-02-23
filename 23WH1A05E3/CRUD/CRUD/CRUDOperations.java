package CRUD;
import java.sql.*;

public class CRUDOperations {
    static final String DB_URL = "jdbc:mysql://localhost:3306/sampledb";
    static final String USER = "root";
    static final String PASS = "root";

    public static void main(String[] args) {
        try {
            // 1️⃣ Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2️⃣ Connect to Database
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            System.out.println("✅ Connected to Database Successfully!");

            // 3️⃣ Insert a User
            insertUser(conn, "bill", "1234", "Bill Gates", "bill.gates@microsoft.com");

            // 4️⃣ Fetch All Users
            fetchUsers(conn);

            // 5️⃣ Update a User
            updateUser(conn, "bill", "123456789", "William Henry Bill Gates", "bill.gates@microsoft.com");

            // 6️⃣ Delete a User
            deleteUser(conn, "bill");

            // 7️⃣ Close Connection
            conn.close();
            System.out.println("✅ Database Connection Closed!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Method to Insert a User
    public static void insertUser(Connection conn, String username, String password, String fullname, String email) throws SQLException {
        String sql = "INSERT INTO users (username, password, fullname, email) VALUES (?, ?, ?, ?)";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, username);
        statement.setString(2, password);
        statement.setString(3, fullname);
        statement.setString(4, email);
        
        int rowsInserted = statement.executeUpdate();
        if (rowsInserted > 0) {
            System.out.println("✅ User Inserted Successfully!");
        }
    }

    // Method to Fetch Users
    public static void fetchUsers(Connection conn) throws SQLException {
        String sql = "SELECT * FROM users";
        Statement statement = conn.createStatement();
        ResultSet result = statement.executeQuery(sql);

        while (result.next()) {
            int id = result.getInt("user_id");
            String name = result.getString("username");
            String fullname = result.getString("fullname");
            String email = result.getString("email");

            System.out.println("👤 ID: " + id + ", Username: " + name + ", Name: " + fullname + ", Email: " + email);
        }
    }

    // Method to Update a User
    public static void updateUser(Connection conn, String username, String newPassword, String newFullname, String newEmail) throws SQLException {
        String sql = "UPDATE users SET password=?, fullname=?, email=? WHERE username=?";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, newPassword);
        statement.setString(2, newFullname);
        statement.setString(3, newEmail);
        statement.setString(4, username);

        int rowsUpdated = statement.executeUpdate();
        if (rowsUpdated > 0) {
            System.out.println("✅ User Updated Successfully!");
        }
    }

    // Method to Delete a User
    public static void deleteUser(Connection conn, String username) throws SQLException {
        String sql = "DELETE FROM users WHERE username=?";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, username);

        int rowsDeleted = statement.executeUpdate();
        if (rowsDeleted > 0) {
            System.out.println("✅ User Deleted Successfully!");
        }
    }
}
