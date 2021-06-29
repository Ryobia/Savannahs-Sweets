import React from 'react';
import emailjs from 'emailjs-com';
import cakepops from '../../photos/cakepop1.JPG';


export default function Order() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_nealm4f', 'template_cnokitb', e.target, 'user_IsTJzOerRsLBrrVoV9vVV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className='order-div'>
      <form className="contact-form" onSubmit={sendEmail}>
        <section className='name-section'>
          <div className='names'>
            <label>First Name</label>
            <input type="text" name="first" />
          </div> 
          <div className='names'>
            <label>Last Name</label>
            <input type="text" name="last" />
          </div>
        </section>
        <label>Email</label>
        <input type="email" name="email" />

        <label>Order</label>
        <textarea name="order" />

        <input type="submit" value="Send" />
      </form>

      <img src={cakepops} alt='cakepops' height='263'/>
    </div>
  );
}