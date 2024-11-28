package integrityTests;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCTest {
    public static void main(String[] args) throws ClassNotFoundException {
        String jdbcUrl = "jdbc:mysql://mysql-service:3306/stock_exchange";
        String username = "root";
        String password = "root_password";
        Class.forName("com.mysql.cj.jdbc.Driver");


        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password)) {
            System.out.println("Connected to MySQL database!");

            // Sample query
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery("SHOW TABLES");

            while (rs.next()) {
                System.out.println("Table: " + rs.getString(1));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
