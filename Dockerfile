FROM node:18.15-alpine3.17
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app/dist
WORKDIR /home/node/app
COPY package*.json ./
USER node
COPY --chown=node:node . .
RUN npm install
EXPOSE 5173