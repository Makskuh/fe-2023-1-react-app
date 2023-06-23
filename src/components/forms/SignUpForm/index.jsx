import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialState = {
  firstName: '',
  lastName: '',
  email: 'test@test.test',
  password: '',
  isAgree: false,
};

function SignUpForm(props) {
  const onSumbit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={onSumbit}>
      <Form>
        <Field name='firstName' placeholder='firstName' />
        <Field name='lastName' placeholder='lastName' />
        <Field name='email' type='email' placeholder='email' />
        <Field name='password' type='password' placeholder='password' />
        <Field name='isAgree' type='checkbox' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
