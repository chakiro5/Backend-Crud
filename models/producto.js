const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productosSchema = new Schema({
  //required especifica que si no existe
  //el campo, no se podrá crear
  // un documento como tal, desde el frontend
  title: { type: String, required: true }, 
  image: { type: String, required: true }, 
  category: { type: String, required: true },
  price: { type: Number, required: true },
    
});

const Producto = mongoose.model("Producto", productosSchema);

module.exports = Producto;

//el modelo debe ser el singular de la coleccion en la base de datos
