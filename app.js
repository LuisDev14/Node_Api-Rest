require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo.js')
const app = express();

app.use(cors());
app.use(express.json());//se prepara para que express reciba informacion a traves de un post

const port = process.env.PORT || 3000;
//console.log(process.env.PORT);

/***
 * Invocamos las rutas aqui 
 */
//TODO localhost/api/___
app.use('/api', require('./routes/index'))

app.listen(port, () => {
  console.log(`Tu app esta lista por el puerto http://localhost:${port}`);
})
//invocamos la conexion
dbConnect();