# Start with the official MySQL image
FROM mysql:latest

# Set environment variables for MySQL configuration
# These will be used to set up MySQL on container startup
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=stock_exchange
ENV MYSQL_USER=my_user
ENV MYSQL_PASSWORD=user_password
CMD ["mysqld"]
# Expose MySQL port
EXPOSE 3306

# Optionally, add a custom SQL script to initialize the database
COPY ./init.sql /docker-entrypoint-initdb.d/


