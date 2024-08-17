FROM node:18

WORKDIR /App

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci

COPY .. .

RUN npm run build

RUN npm install -g serve