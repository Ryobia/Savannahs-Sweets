import React, { useState } from "react";

import Logo from "../Logo";

const Nav = (props) => {
  const { currentPage, setCurrentPage } = props;

  return (
    <div className="nav-div">
      <header>
        <a href="#home">
          <span onClick={() => setCurrentPage("home")}>
            <Logo />
          </span>
        </a>
        <section className="nav-section">
          <div className="nav-bar">
            <h2>
              <a href="#about">
                <span onClick={() => setCurrentPage("about")}>About Me</span>
              </a>
            </h2>
            <h2>
              <a href="#products">
                <span onClick={() => setCurrentPage("products")}>Products</span>
              </a>
            </h2>
            <h2>
              <a href="#order">
                <span onClick={() => setCurrentPage("order")}>Order</span>
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
                  Login/Signup
                </span>
              </a>
            </h2>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Nav;
