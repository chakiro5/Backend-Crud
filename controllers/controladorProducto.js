//importamos el metodo (Router)desde express
const Producto = require("../models/producto");

//Le asignamos a una variable el metodo y exportamos el modulo
module.exports.productos_get = (req, res) => {
  
  //OBTENER PRODUCTOS
  //Acà vamos a tener los datos de la colección productos
    Producto.find() //método de MongoDb, que me permite hacer búsquedas en la base de datos
    .then((respuesta) => {
      res.send(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

//CREAR PRODUCTOS   
//Acá vamos a insertar información a la base de datos.
//en el método post, si se requiere recibir alguna información del usuario

module.exports.productos_post = (req, res) => {
  const { title, image, category, price} = req.body;
  
  //implemantación método para crear producto
    Producto.create({ title, image, category, price})
    .then((respuesta) => {
      console.log(respuesta);
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};

//ELIMINAR PRODUCTOS   
//implemantación método para eliminar producto
module.exports.productos_delete = (req, res) => {
  console.log(req.params);
  const{id}=req.params;
  Producto.deleteOne({_id:id})//borra los elementos a partir del id de los parametros
  .then((respuesta) =>{
    console.log(respuesta);
    res.status(200).json(respuesta);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).json(error);
  });
  
};
