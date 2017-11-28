FROM node:carbon-alpine
RUN apk add --no-cache gcc g++ make python git && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install && npm cache clean --force && \
    cd client && npm install && npm cache clean --force

FROM node:carbon-alpine

COPY --from=0 /usr/src/app .

EXPOSE 3000
EXPOSE 3001

CMD [ "npm", "start" ]
