const express = require('express');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

// Configuration de la DB
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connection à la DB
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now..', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.json({"message": "Projet Domo"})
});

app.listen(3002, () => {
    console.log("Server is listening on port 3002")
});