FROM node:lts-slim

LABEL "aplicacion.backend"="Christian Bacilio De La Cruz"

LABEL autor="David"

LABEL version="1.0"

RUN mkdir -v /opt/backend

WORKDIR /opt/backend

COPY ["package.json","package-lock.json","./"]

RUN npm install --quiet
RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 8000

#CMD npm run start
CMD nodemon -L --watch . src/index.js