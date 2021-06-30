import React from "react";  
import facebook from '../../photos/icons/facebook.png';
const Footer = () => {

    
    return (
        <footer>
            
            
            <p>&copy; 2021 Savannah's Sweets</p>
            <div>
          <p>Find us on Facebook! </p>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/SavannahSweets00/"
        >
          <img src={facebook} height='30px' alt='facebook icon'/>
        </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;