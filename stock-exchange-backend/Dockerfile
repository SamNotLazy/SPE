# Use OpenJDK image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the Spring Boot JAR file to the container
COPY target/stock-exchange-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 8082

# Run the Spring Boot application
ENTRYPOINT ["sh", "-c", "echo 'Sleeping for 30 seconds...'; sleep 15; echo 'Starting the application...'; exec java -jar app.jar"]
