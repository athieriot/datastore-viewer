FROM node:carbon-alpine
MAINTAINER Aurelien.Thieriot@finkit.io

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install

CMD ["npm", "start"]
