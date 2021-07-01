const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    orderDate: {
      type: Date,
      default: Date.now
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    orderText: {
      type: String,
      required: true
    }
   
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;