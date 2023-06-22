import React, { useReducer } from 'react';

function reducer(state, action) {
  const {name, value} = action;

  const newState = {
    ...state,
    [name] : value
  }

  return newState;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isAgree: false,
};

function SignUpForm(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();

    // signUp();
  };

  const changeHandler = ({ target: { value, name, type, checked } }) => {
    const newValue = type === 'checkbox' ? checked : value;

    const action = {
      name,
      value: newValue,
    };

    dispatch(action);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        name='firstName'
        placeholder='firstName'
        value={state.firstName}
        onChange={changeHandler}
      />
      <input
        type='text'
        name='lastName'
        placeholder='lastName'
        value={state.lastName}
        onChange={changeHandler}
      />
      <input
        type='email'
        name='email'
        placeholder='email'
        value={state.email}
        onChange={changeHandler}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={state.password}
        onChange={changeHandler}
      />
      <label>
        <input
          type='checkbox'
          name='isAgree'
          checked={state.isAgree}
          onChange={changeHandler}
        />
        Agree to terms of service
      </label>

      <button>Sign Up</button>
    </form>
  );
}

export default SignUpForm;
