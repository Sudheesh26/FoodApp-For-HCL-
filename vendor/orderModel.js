const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: Number,
    title: String,
    img: String,
    text: String,
    btn: String,
    user : String
});

const Order = mongoose.model('orderModel', orderSchema);

module.exports = Order;
