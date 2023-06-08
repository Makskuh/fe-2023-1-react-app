import React, { Component } from 'react';
import './style.css';
import RadioInput from './RadioInput';
import CONSTANTS from '../../constants';
const { ACCOUNT_TYPES } = CONSTANTS;

function loginUser(email, password) {
  if (!email || !password) {
    throw new Error();
  }

  alert(`User is logged in!`);
}

const accountTypesArr = Object.values(ACCOUNT_TYPES);

const initialValues = {
  email: '',
  password: '',
  isRemembered: false,
  comment: '',
  accountType: ACCOUNT_TYPES.MODER.OPTION_VALUE,
  gender: 'female',
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

  handleChange = ({ target: { name, value, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  mapOptions = (ACCOUNT_TYPE) => (
    <option key={ACCOUNT_TYPE.OPTION_VALUE} value={ACCOUNT_TYPE.OPTION_VALUE}>
      {ACCOUNT_TYPE.TEXT_VALUE}
    </option>
  );

  render() {
    const { email, password, comment, accountType, isRemembered, gender } =
      this.state;

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
        <fieldset>
          <legend>Choose your gender:</legend>
          <RadioInput
            handleChange={this.handleChange}
            value='male'
            stateValue={gender}
            radioText='Male'
          />
          <RadioInput
            handleChange={this.handleChange}
            value='female'
            stateValue={gender}
            radioText='Female'
          />
        </fieldset>
        <select
          name='accountType'
          onChange={this.handleChange}
          value={accountType}
        >
          {options}
        </select>
        <label>
          <input
            type='checkbox'
            name='isRemembered'
            checked={isRemembered}
            onChange={this.handleChange}
          />{' '}
          Remember me
        </label>
        <button className='btn'>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
