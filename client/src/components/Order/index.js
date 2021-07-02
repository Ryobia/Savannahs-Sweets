import React, { useState } from "react";
import emailjs from 'emailjs-com';
import cakepops from '../../photos/cakepop1.JPG';
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { ADD_ORDER } from "../../utils/mutations";



export default function Order() {
  const [formState, setFormState] = useState({ orderText: '' });
  const [addOrder, { error }] = useMutation(ADD_ORDER);

  const sendEmail = async e => {
    e.preventDefault();
    
    try {
      const mutationResponse = await addOrder({
        variables: {
          orderText: formState.orderText } })
      const token = mutationResponse.data.addOrder.token;
      Auth.login(token);
    } catch (e) {
      console.log (e)
    }

    if (e.target.first.value && e.target.last.value && e.target.email.value && e.target.order.value){

    emailjs.sendForm('service_nealm4f', 'template_cnokitb', e.target, 'user_IsTJzOerRsLBrrVoV9vVV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();

      document.getElementById('successModal').style.display = 'flex';
      document.getElementById('orderDiv').style.opacity = 0.4;



  } else {
    document.getElementById('errorModal').style.display = 'flex';
    document.getElementById('orderDiv').style.opacity = 0.4;
  }
  }

  function renderError() {
    document.getElementById('errorModal').style.display = 'none'
    document.getElementById('successModal').style.display = 'none'
    document.getElementById('orderDiv').style.opacity = 1;
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };


  return (
    <div>
      <div id='errorModal'className='order-error'>
        <h2>ERROR</h2>
        <h3>Please fill out form completely</h3>
        <button id='errorBtn' onClick={renderError}>OK</button>

      </div>
      <div id='successModal'className='order-error'>
        <h2>SUCCESS</h2>
        <h3>Thank you for placing an order!</h3>
        <h3>Please allow for up to 24 hours for someone to confirm your order.</h3>
        <button id='errorBtn' onClick={renderError}>OK</button>

      </div>
    <div id='orderDiv' className='order-div'>
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

        <input name="orderText" type="submit" value="Send" onChange={handleChange} />
      </form>

      <img src={cakepops} alt='cakepops' height='263'/>
    </div>
    </div>
  );
}