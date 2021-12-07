const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const productoSchema = new Schema({
    producto: {type: Schema.Types.ObjectId, ref: 'producto'},
    cantidad: { type: Number, required: true }, 
    compra: { type: Number, required: true },
});

const paymentSchema = new Schema({
    total_payment: { type: String, required: true },   
    descripcion: { type: String, required: true },
    productos: [productoSchema],
});


const Payment = mongoose.model("payment", paymentSchema);

module.exports = Payment;