import React from "react";
import Auth from '../../utils/auth';
import Logo from "../Logo";

const Nav = (props) => {
  const { setCurrentPage } = props;

if (Auth.loggedIn()) {
  return (
    <div className="nav-div">
      <header>
        <div className="nav-bar">

          <div className="dropdown">
            <button className="dropbtn">
              Menu
            </button>
            <div className="dropdown-content">
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
          <a className='main-logo' href="#home">
            <span onClick={() => setCurrentPage("home")}>
              <Logo />
            </span>
          </a>

          <h2 className='login-nav'>
            <a href="#login">
              <span onClick={() => Auth.logout()}>Logout</span>
            </a>
          </h2>
        </div>
      </header>
    </div>
  );} else {
    return (
      <div className="nav-div">
        <header>
          <div className="nav-bar">
  
            <div className="dropdown">
              <button className="dropbtn">
                Menu
              </button>
              <div className="dropdown-content">
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
                    <span onClick={() => setCurrentPage("login")}>Order Now</span>
                  </a>
                </h2>
                <h2>
                  
                </h2>
              </div>
            </div>
            <a className='main-logo' href="#home">
              <span onClick={() => setCurrentPage("home")}>
                <Logo />
              </span>
            </a>
  
            <h2 className='login-nav'>
              <a href="#login">
                <span onClick={() => setCurrentPage("login")}>Login</span>
              </a>
            </h2>
          </div>
        </header>
      </div>
    )
    
  }
};

export default Nav;
