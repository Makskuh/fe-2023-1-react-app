import React, { Component } from 'react';
import './style.css';

function loginUser(email, password) {
  if (!email || !password) {
    throw new Error();
  }

  alert(`User is logged in!`);
}

const ACCOUNT_TYPES = {
  BASIC: {
    OPTION_VALUE: 'basic',
    TEXT_VALUE: 'Basic',
  },
  MODER: {
    OPTION_VALUE: 'moder',
    TEXT_VALUE: 'Moderator',
  },
  ADMIN: {
    OPTION_VALUE: 'admin',
    TEXT_VALUE: 'Administrator',
  },
};

const accountTypesArr = Object.values(ACCOUNT_TYPES);

const initialValues = {
  email: '',
  password: '',
  isRemembered: false,
  comment: '',
  accountType: ACCOUNT_TYPES.MODER.OPTION_VALUE,
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

  mapOptions = (ACCOUNT_TYPE) => (
    <option key={ACCOUNT_TYPE.OPTION_VALUE} value={ACCOUNT_TYPE.OPTION_VALUE}>
      {ACCOUNT_TYPE.TEXT_VALUE}
    </option>
  );

  render() {
    const { email, password, comment, accountType } = this.state;

    const options = accountTypesArr.map(this.mapOptions);

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
          {options}
        </select>
        <button className='btn'>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
