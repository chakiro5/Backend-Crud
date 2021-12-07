const User = require("../models/user");


module.exports.get_users = (req, res) => {
  User.find()
    .then((respuesta) => {
      res.send(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};


module.exports.create_user = (req, res) => {

  const { nombre, usuario, password } = req.body;
  
  User.create({ nombre, usuario, password })
    .then((respuesta) => {
      console.log(respuesta);
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};

module.exports.delete_user = (req, res) => {
  const{ id } = req.params;
  User.deleteOne({ _id: id })
  .then((respuesta) =>{
    console.log(respuesta);
    res.status(200).json(respuesta);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).json(error);
  });
  
};
