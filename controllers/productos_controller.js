//importamos el metodo (Router)desde express
const Producto = require("../models/producto");

module.exports.get_product_by_id = (req, res) => {
  Producto.findOne({ _id: req.params.id })
    .then((respuesta) => {
      res.send(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

//Le asignamos a una variable el metodo y exportamos el modulo
module.exports.get_products = (req, res) => {
  
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

module.exports.create_product = (req, res) => {
  const { title, description, image, category, marca, price} = req.body;
  
  //implemantación método para crear producto
    Producto.create({ title, description, image, category, marca, price})
    .then((respuesta) => {
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};

module.exports.update_product = (req, res) => {
  const { title, description, image, category, marca, price} = req.body;
  
  Producto.findOneAndUpdate(
      { _id: req.body.id },
      { title, description, image, category, marca, price})
    .then((respuesta) => {
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};

//ELIMINAR PRODUCTOS   
//implemantación método para eliminar producto
module.exports.delete_product = (req, res) => {
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
