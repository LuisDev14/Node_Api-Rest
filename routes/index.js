const express = require('express');
const fs = require('fs');
const router = express.Router();

//nos va a dar el path donde se encuentra este archivo
const PATH_ROUTES = __dirname;
console.log(PATH_ROUTES);

/*
leer el directorio de manera sincrona
const a = fs.readdirSync(PATH_ROUTES);//devuelve un array de los archivos que hay en esa ruta
console.log(a);
*/
//removemos la extension .js de los archivos
const removeExtension =  (fileName)=>{
  //TODO tracks.js, index.js -> [tracks,js] ->[tracks] obtenemos el nombre del archivo sin la extension
  return fileName.split('.').shift();
}
const a = fs.readdirSync(PATH_ROUTES).filter((file)=>{
  const name = removeExtension(file);
  console.log(name);
  if(name != 'index'){
    router.use(`/${name}`,require(`./${file}`));//TODO http://localhost:3001/api/tracks
  }
});
console.log(`a ${a}`);

module.exports = router;