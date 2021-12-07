const Payment = require("../models/payment");
const Producto = require("../models/producto");

module.exports.get_payments = (req, res) => {
    Payment.find()
      .then((payments) => {
        Producto.populate(payments, {path: 'productos.producto'}, function(err, payments) {
          res.send(payments);
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ error });
      });
  };
  
  module.exports.get_payment_by_id = (req, res) => {
    Payment.findOne({ _id: req.params.id })
      .then((payment) => {
          
        Producto.findOne({ _id: payment.producto_id })
            .then((producto) => {
                
                res.send(
                    {
                        payment: payment,
                        producto: producto
                    }
                );

            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({ error });
            });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ error });
      });
  };
  
  
  module.exports.create_payment = (req, res) => {
  
    const { productos, total_payment, descripcion } = req.body;
    
    Payment.create({ productos, total_payment, descripcion })
      .then((respuesta) => {
        res.status(200).json(respuesta);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json(error);
      });
  };
  
  module.exports.delete_payment = (req, res) => {
    const{ id } = req.params;
    Payment.deleteOne({ _id: id })
    .then((respuesta) =>{
      console.log(respuesta);
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
    
  };