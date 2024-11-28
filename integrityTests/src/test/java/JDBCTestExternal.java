import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCTestExternal {
    @Test
    public void test() throws ClassNotFoundException {
        String jdbcUrl = "jdbc:mysql://127.0.0.1:3306/my_database";
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
