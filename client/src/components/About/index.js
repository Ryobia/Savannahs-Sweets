import React from "react";
import image from '../../photos/cakepop1.JPG';

const About = () => {
    return (
      <div className="about">
          <h2>About Me</h2>
          <img
            className="about-image"
            alt=""
            src={image}
          ></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra eros efficitur mollis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac cursus ex. Vivamus risus metus, mollis et venenatis sed, auctor vestibulum nisi. Donec eu velit vel nisl accumsan efficitur. Aliquam consectetur porttitor dui at commodo. Sed blandit nec nisi at imperdiet. Morbi ultricies ante eget risus commodo, in faucibus lectus porttitor. Vivamus ultrices mi a nisi egestas vulputate. Donec finibus congue ipsum. Quisque ultricies condimentum nunc ac convallis. Vivamus sem elit, ornare eget commodo ac, tincidunt in eros. Donec accumsan, turpis ut iaculis dapibus, tortor erat vehicula nulla, nec tincidunt urna nisi nec tortor. Cras finibus odio ut sapien aliquet tempor. Ut quam ante, convallis ac dignissim ac, tincidunt ut augue. Integer vel ipsum sagittis, blandit mauris a, suscipit nulla.</p>
          <p>Nullam finibus magna quis sapien suscipit, in eleifend ligula convallis. Vivamus sed orci quam. Curabitur tempor venenatis augue, ut posuere neque varius at. Aenean fringilla purus congue ipsum accumsan facilisis. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ante dui, ultricies id auctor non, placerat at urna. Quisque sagittis, mauris a lobortis vestibulum, lorem lacus pharetra orci, nec pulvinar risus ante quis eros. Donec sed venenatis erat, vitae maximus ex. Aenean facilisis dignissim sem. Aliquam congue consequat luctus.</p>
          <p>Check out my Facebook page <a href="#">here</a>!</p>
      </div>
    );
  };
  
  export default About;