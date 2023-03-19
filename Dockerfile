FROM node:18.15-alpine3.17

WORKDIR /home/node/app

COPY package*.json ./

USER node

COPY --chown=node:node . .

RUN npm install

EXPOSE 5173