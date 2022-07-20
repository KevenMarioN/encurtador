import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
dotenv.config({
  path : path.resolve(__dirname,'../.env')
});
import router from './router';
import MongooseConnection  from './database/MongooseConnection';
const database = new MongooseConnection();
database.connect();
const app = express();
app.use(express.json());
app.use(router);
const PORT = process.env.PORT || 3000;


app.listen(PORT,() => console.log(`RUNNING IN PORT : ${PORT} 🔥 `))