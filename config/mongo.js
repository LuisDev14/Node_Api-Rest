//Conexion a la base de datos
const mongoose = require('mongoose');
const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true
    });
    console.log('Conexion correcta 😎');
  } catch (error) {
    console.error('Error de conexion 💀', error);
  }
};
module.exports = dbConnect;


/* No funcional
const mongoose = require('mongoose');
const dbConnect = () => {

  const DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
    (err, res) => {
      if (!err) {
        console.log('*** Conexion correcta ***');
      } else {
        console.log('*** Error de conexion ***');
      }
    }
  );
};
module.exports = dbConnect;
*/




/*
const mongoose = require('mongoose');
const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Conexion correcta 😎');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Error de conexion 💀', error);
  });
};
module.exports = dbConnect;
*/