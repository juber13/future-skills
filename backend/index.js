import express from 'express'
import dotenv from 'dotenv'


dotenv.config();
import connectDB from './db.js';

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))



// import router

import  cardRouter from './routes/card.route.js'

app.use('/api' , cardRouter);

app.listen(PORT , () => {
    console.log(`Server is running at PORT ${PORT} ✅`)
})