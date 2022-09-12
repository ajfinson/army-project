import express from "express";
import bodyParser from 'body-parser';
import  usersRoutes from './routes/users.js'

const app = express();
app.use(bodyParser.json())
app.use('/api/players', usersRoutes)
app.listen(5000, ()=> console.log('server running'))