import React from "react";  

function item(item) {
    const {
        image,
        name,
        description,
        _id,
        price,
        quantity
    } = item;
}

const Item = () => {
    return (
      <div className="card">
          <img
            alt={name}
            src={`/photos/${image}`}
          />
          <p>{name}</p>
          <p>{description}</p>
          <p>${price}</p>
      </div>
    );
  };
  
  export default Item;