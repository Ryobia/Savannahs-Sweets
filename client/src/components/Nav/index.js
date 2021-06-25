import React from "react";

import Logo from "../Logo";

const Nav = (props) => {
  const { setCurrentPage } = props;

  return (
    <div className="nav-div">
      <header>
          <div className="nav-bar">
            <a href="#home">
              <span onClick={() => setCurrentPage("home")}>
                <Logo />
              </span>
            </a>
            <h2>
              <a href="#about">
                <span onClick={() => setCurrentPage("about")}>The Baker</span>
              </a>
            </h2>
            <h2>
              <a href="#products">
                <span onClick={() => setCurrentPage("products")}>The Goodies</span>
              </a>
            </h2>
            <h2>
              <a href="#order">
                <span onClick={() => setCurrentPage("order")}>Order Now</span>
              </a>
            </h2>
            <h2>
              <a href="#recent">
                <span onClick={() => setCurrentPage("recent")}>
                  Recent Orders
                </span>
              </a>
            </h2>
            <h2>
              <a href="#login">
                <span onClick={() => setCurrentPage("login")}>
                  Login/Logout
                </span>
              </a>
            </h2>
          </div>
      </header>
    </div>
  );
};

export default Nav;
