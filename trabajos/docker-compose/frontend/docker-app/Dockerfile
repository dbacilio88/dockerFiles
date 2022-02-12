FROM node:lts-slim

LABEL "aplicacion.backend"="Christian Bacilio De La Cruz"

LABEL autor="David"

LABEL version="1.0"

RUN mkdir -v /opt/docker-app

WORKDIR /opt/docker-app

COPY ["package.json","package-lock.json","./"]

RUN npm install --quiet

COPY . .

EXPOSE 4200

CMD npm run start