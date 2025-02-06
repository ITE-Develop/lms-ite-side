
FROM node:20-alpine3.13 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 444
# Start Nginx to serve the application
CMD ["node", ]