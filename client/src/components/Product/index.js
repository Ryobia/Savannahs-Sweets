import React from "react";

function Product(product) {
  const {
    image,
    name,
    description,
    _id,
    price
  } = product;

  return (
    <div className="card">
      <img
        className="card-image"
        alt={name}
        src={image}
      />
      <p className="card-title">{name}</p>
      <p className="card-description">{description}</p>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default Product;