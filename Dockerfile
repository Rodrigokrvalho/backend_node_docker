FROM node 

WORKDIR /usr/app

ADD package.json ./

RUN npm install



