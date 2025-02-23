# Use the official Node.js image as the base image
FROM node:18-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project (except files in .dockerignore)
COPY . .

# Expose the Vite development port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
