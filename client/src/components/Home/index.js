import React from "react";
import image1 from "../../photos/homeSlideshow/image1.png";
import image4 from "../../photos/homeSlideshow/image4.jpg";
import image5 from "../../photos/homeSlideshow/image5.jpg";
import image2 from "../../photos/homeSlideshow/image2.JPG";
import image3 from "../../photos/homeSlideshow/image3.png";
import pop from "../../photos/Logo/pop.png";

import { Slide } from "react-slideshow-image";

const slideImages = [image1, image2, image3, image4, image5];

const Home = (props) => {
  const { setCurrentPage } = props;
  return (
    <div className="home-div">
      <div className="slideshow">
        <Slide easing="ease" autoplay={true}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
          </div>
        </Slide>
      </div>
      <div className='home-content'>
        <img className='left-pop' src={pop} height='100px' alt='cakepop'></img>
        <div className="home-text">
          <h1>Welcome To Savannah's Sweets!</h1>
          <h3>
            Founded by Savannah in 2021, this humble little bakery aims to serve
            you with made-to-order sweets for any occasion. Take a look around
            and be sure to fill out an order form and we'll get back to you as
            soon as possible.
          </h3>
        </div>
        <img className='right-pop'src={pop} height='100px' alt='cakepop'></img>

      </div>
      <div className='home-products'>
        <p><a href='#products' onClick={() => setCurrentPage("products")}>Click through to our Product Page</a> <br/> OR <br/> <a href='#login' onClick={() => setCurrentPage("login")}>Click here to Login/Signup!</a></p>
      </div>
    </div>
  );
};

export default Home;
