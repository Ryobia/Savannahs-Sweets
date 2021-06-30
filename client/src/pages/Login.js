import React, { useState } from "react";
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);
  const { setCurrentPage } = props;

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
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
        {
          error ? <div>
            <p className="error-text" >The provided credentials are incorrect</p>
          </div> : null
         }
        <div className="">
          <button type="submit">
            Submit  
          </button>
        </div>
      </form>
      <div>
        <p>Don't have a login? Sign up <a href="#signup"><span onClick={() => setCurrentPage("signup")}>here</span></a></p>
      </div>
    </div>
  );
}


export default Login;