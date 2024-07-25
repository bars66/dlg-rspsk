FROM node:20-bookworm
WORKDIR /app
ADD . .
RUN npm install && npm run tsc && npm install --production

ENV NODE_ENV=production
CMD [ "node", "build/server.js" ]