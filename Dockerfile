FROM node:20-bookworm
WORKDIR /app
ADD . .
RUN npm install

CMD [ "node", "src/server.js" ]