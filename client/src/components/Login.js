import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  login = e => {
    e.preventDefault();

    axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected');
        })
        .catch(err => console.log(err));
};

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
