const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const http = require('http');
const router = require('./router');
const db = require('./database').parameters;
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)   
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Servidor running');
});

//'mongodb://localhost:27017'
mongoose.connect(db.url, db.mongo_opts, err => {
    if (err) {
        console.log('Error en la base de datos');
    }
    console.log('Conectado db');
});

router(app);