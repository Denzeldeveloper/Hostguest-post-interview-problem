import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemon from 'nodemon';

const app = express();

app.use(bodyparser.json({limit: "50mb", extended: true}));

app.use(bodyparser.urlencoded({limit: "50mb", extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Denzel:9763@cluster0.ocgjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> app.listen(PORT, () =>
    console.log('Connection Successful Running on port: ${PORT}')
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);



