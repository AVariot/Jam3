FROM node:16.18.1

WORKDIR /usr/app

RUN apt-get update && apt-get install -y netcat

COPY ./api/package.json /usr/app

RUN npm install

COPY . /usr/app

EXPOSE 3000

CMD ["/usr/app/api/start.sh", "node", "/usr/app/api/index.js"]
