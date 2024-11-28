# Dockerfile.app
FROM openjdk:18
WORKDIR /app

# Copy your application’s jar file into the container
COPY target/itests-jar-with-dependencies.jar app.jar


# Run the application

 ENTRYPOINT ["sh", "-c", "echo 'Waiting for 5 seconds...'; sleep 15; java -cp app.jar:mysql-connector-j-8.0.33.jar integrityTests.JDBCTest"]

EXPOSE 8081