const User = require("../models/user");

module.exports.login = (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((respuesta) => {
        res.send(respuesta);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ error });
      });
  };

  module.exports.register = (req, res) => {

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