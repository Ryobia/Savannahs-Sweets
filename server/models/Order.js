const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    orderDate: {
      type: Date,
      default: Date.now
    },
    orderText: {
      type: String,
      required: true
    }
   
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;