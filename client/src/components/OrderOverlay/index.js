import React from "react";
import Auth from "../../utils/auth";

const OrderOverlay = (props) => {
  const { setCurrentPage } = props;

  if (Auth.loggedIn()) {
    return (
      <div className="order-overlay-div">
        <a href="#order" onClick={() => setCurrentPage("order")}>
          <i className="fas fa-shopping-cart"></i>
        </a>
        <p>Order Now!</p>
      </div>
    );
  } else {
    return (
      <div className="order-overlay-div">
        <a href="#order" onClick={() => setCurrentPage("login")}>
          <i className="fas fa-shopping-cart"></i>
        </a>
        <p>Order Now!</p>
      </div>
    );
  }
};

export default OrderOverlay;
