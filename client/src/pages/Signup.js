import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="">
      <h2>Sign up!</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-el">
          <label className="form-label" htmlFor="firstName">First Name:</label>
          <input
            className="form-input"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-el">
          <label className="form-label" htmlFor="lastName">Last Name:</label>
          <input
            className="form-input"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-el">
          <label className="form-label" htmlFor="email">Email:</label>
          <input
            className="form-input"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-el">
          <label className="form-label" htmlFor="pwd">Password:</label>
          <input
            className="form-input"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="form-el">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

}

export default Signup;
