import React, { Component } from 'react';
import './style.css';

function loginUser(email, password) {
  if (!email || !password) {
    throw new Error();
  }

  alert(`User is logged in!`);
}

const ACCOUNT_TYPES = {
  BASIC: 'basic',
  MODER: 'moder',
  ADMIN: 'admin'
}

const initialValues = {
  email: '',
  password: '',
  isRemembered: false,
  comment: '',
  accountType: ACCOUNT_TYPES.MODER,
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
    const { email, password, comment, accountType } = this.state;

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
        <textarea name='comment' value={comment} onChange={this.handleChange} />
        <select
          name='accountType'
          onChange={this.handleChange}
          value={accountType}
        >
          <option value={ACCOUNT_TYPES.BASIC}>Basic</option>
          <option value={ACCOUNT_TYPES.MODER}>Moderator</option>
          <option value={ACCOUNT_TYPES.ADMIN}>Administrator</option>
        </select>
        <button className='btn'>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
