const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    orderDate: {
      type: Date,
      default: Date.now
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 0
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
   
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;