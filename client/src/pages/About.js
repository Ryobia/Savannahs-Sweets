import React from "react";
import image from '../photos/profile-Ss.jpg';

function About() {
    return (
      <div className="about">
          <h2>About Me</h2>
          <img
            className="about-image"
            alt=""
            src={image}
          ></img>
          <div className="about-text">
          <p>Savannah here!  

I was just mindlessly scrolling through the internet like everyone does, and came across some satisfying videos of people making cake pops and I thought, "Hey, that looks fun! I want to do that." Next thing I know I'm elbows deep in some delicious chocolate cake! Making cake pops was so fun and satisfying I couldn't stop! They were a huge hit with my family and they kept encouraging me to branch out and sell them. So I got brave, went way out of my comfort zone, and here we are! <br></br>  

I'm a 24 years old novice baker and I married the love of my life! Who made this AWESOME website for me by the way. He's always been so encouraging and supportive of my dreams. We have THE cutest 9 month old baby girl. She loves to chase after our two little cats and torment the poor things! Who love to eat the sprinkles I accidently drop on the ground. 😛  

I work full time and bake cakes on the side. I'm hoping one day to switch that around, and bake cakes full time and work on the side! XD  

I'm so grateful for all the support I've received and continue to receive from people ordering my cakes pops. I'm constantly experimenting with new colors and flavors and just having so much fun!</p>
          </div>
      </div>
    );
  };
  
  export default About;