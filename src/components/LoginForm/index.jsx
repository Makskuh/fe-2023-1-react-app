import React, { Component } from 'react';
import './style.css';

function loginUser(email, password) {
  if (!email || !password) {
    throw new Error();
  }

  alert(`User is logged in!`);
}

class LoginForm extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    console.log(e);

    // loginUser(e.target.elements.mail.value, e.target.elements.password.value);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className='form'>
        <input className='input' type='email' name='mail' placeholder='Email' />
        <input
          className='input'
          type='password'
          name='password'
          placeholder='Password'
        />
        <button className='btn'>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
