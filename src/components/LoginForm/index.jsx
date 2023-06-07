import React, { Component } from 'react';
import './style.css';

function loginUser(email, password) {
  if (!email || !password) {
    throw new Error();
  }

  alert(`User is logged in!`);
}

const initialValues = {
  email: '',
  password: '',
  isRemembered: false,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialValues,
    };
  }

  submitHandler = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(e);

    // loginUser(e.target.elements.mail.value, e.target.elements.password.value);
    loginUser(email, password);
    // e.target.reset();

    this.setState({ ...initialValues });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.submitHandler} className='form'>
        <input
          onChange={this.handleChange}
          className='input'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
        />
        <input
          onChange={this.handleChange}
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
