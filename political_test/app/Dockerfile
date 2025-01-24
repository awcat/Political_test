# Use a Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json first
# This ensures that dependencies are cached unless they change
COPY political_test/app/package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the rest of the application source code
COPY political_test/app ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

