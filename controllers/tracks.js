const{tracksModel} = require('../models') //hace referencia al .index de models

//obtener lista
const getItems = async (req,res)=>{
  const data = await tracksModel.find({});
  //const data = ['hola', 'mundo'];
  res.send({ data });
}
//obtener un detalle
const getItem = (req,res)=>{
}
//insetar un registro
const createItem = async (req,res)=>{
  const {body} = req;
  console.log(body);

  const data = await tracksModel.create(body);
  res.send({data})
  res.send({algo:1})
}
//actualizar un registro
const updateItem = (req,res)=>{
}
//Eliminar un registro
const deleteItem = (req,res)=>{
}
module.exports = {getItems, getItem, createItem, updateItem, deleteItem}