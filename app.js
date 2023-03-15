require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo.js')
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;
//console.log(process.env.PORT);

app.listen(port,()=>{
    console.log(`Tu app esta lista por el puerto http://localhost:${port}`);
})
//invocamos la conexion
dbConnect();