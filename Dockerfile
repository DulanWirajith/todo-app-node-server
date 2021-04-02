# FROM node:alpine AS my-app-build
FROM node:12.18.4-alpine AS my-app-build

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]
