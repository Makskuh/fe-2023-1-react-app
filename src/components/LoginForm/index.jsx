import React, { Component } from 'react';
import './style.css';

function loginUser(email, password) {
  if (!email || !password) {
    throw new Error();
  }

  alert(`User is logged in!`);
}

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(e);

    // loginUser(e.target.elements.mail.value, e.target.elements.password.value);
    loginUser(email, password);
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.submitHandler} className='form'>
        <input
          onChange={this.handleEmailChange}
          className='input'
          type='email'
          name='mail'
          placeholder='Email'
          value={email}
        />
        <input
          onChange={this.handlePasswordChange}
          className='input'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
        />
        <button className='btn'>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
