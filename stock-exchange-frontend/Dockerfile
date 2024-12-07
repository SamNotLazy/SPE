# Use Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the React application
RUN npm run build

# Use nginx to serve the React app
FROM nginx:alpine
COPY build/ /usr/share/nginx/html

# Expose the application port
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

