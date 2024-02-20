console.log('hello nodemon');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {PORT} = require('./appConfig/app.config');
require('dotenv').config();
const app = express();

const dbUri = process.env.DB_URI;

//add middleware 
app.use(express.json());
//for development mode 
app.use(cors());

mongoose.connect("mongodb+srv://krksingh99:c5SVuMbng33zNpIZ@cluster0.0ca5ny1.mongodb.net/");
const db = mongoose.connection;
db.on('error',() => {
    console.log('something went wrong ')
})
db.once('open',() => {
    console.log('connected to database')
})
require('./app/router/movie.router')(app);

app.listen(PORT, () => {
    console.log('server is running on port',PORT);
})
