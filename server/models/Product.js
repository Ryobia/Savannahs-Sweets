const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    price: {
        type: Number,
        required: true
    }
   
  }
);

const Product = model('Product', productSchema);

module.exports = Product;