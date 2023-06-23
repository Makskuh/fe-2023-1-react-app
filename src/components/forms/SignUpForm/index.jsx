import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isAgree: false,
};

function SignUpForm(props) {
  const onSumbit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
  };

  return (
    <Formik initialValues={initialState} onSubmit={onSumbit}>
      {(formikProps) => {
        console.log(formikProps);
        return (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <input
              name='firstName'
              placeholder='firstName'
              value={formikProps.values.firstName}
              onChange={formikProps.handleChange}
            />
            <input
              name='lastName'
              placeholder='lastName'
              value={formikProps.values.lastName}
              onChange={formikProps.handleChange}
            />
            <input
              name='email'
              type='email'
              placeholder='email'
              value={formikProps.values.email}
              onChange={formikProps.handleChange}
            />
            <input
              name='password'
              type='password'
              placeholder='password'
              value={formikProps.values.password}
              onChange={formikProps.handleChange}
            />
            <input
              name='isAgree'
              type='checkbox'
              value={formikProps.values.isAgree}
              onChange={formikProps.handleChange}
            />
            <button type='submit'>Submit</button>
          </form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
