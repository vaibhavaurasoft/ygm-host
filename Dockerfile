FROM node:16.18.0

WORKDIR /usr/src/app

COPY ./package.json ./package.json

RUN npm install

COPY . .

RUN cp ./sample.env .env

RUN npm run build

EXPOSE 9010

CMD ["npm","start"]
