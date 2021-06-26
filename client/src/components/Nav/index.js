import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

import Logo from "../Logo";

const Nav = (props) => {
  const { setCurrentPage } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav-div">
      <header>
        <div className="nav-bar">
          <a href="#home">
            <span onClick={() => setCurrentPage("home")}>
              <Logo />
            </span>
          </a>

          <div class="dropdown">
            <button class="dropbtn">
              Menu
            </button>
            <div class="dropdown-content">
              <h2>
                <a href="#about">
                  <span onClick={() => setCurrentPage("about")}>The Baker</span>
                </a>
              </h2>
              <h2>
                <a href="#products">
                  <span onClick={() => setCurrentPage("products")}>
                    The Goodies
                  </span>
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
            </div>
          </div>
          <h2 className='login-nav'>
            <a href="#login">
              <span onClick={() => setCurrentPage("login")}>Login/Logout</span>
            </a>
          </h2>
        </div>
      </header>
    </div>
  );
};

export default Nav;
