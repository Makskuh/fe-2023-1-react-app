import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas';

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
    <Formik
      initialValues={initialState}
      onSubmit={onSumbit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {(props) => {
        console.log(props);
        const condition = Object.entries(props.errors).length > 0;
        return (
          <Form>
            <Field name='firstName' placeholder='firstName' />
            <ErrorMessage name='firstName'>
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
            <Field name='lastName' placeholder='lastName' />
            <ErrorMessage
              name='lastName'
              component={'div'}
              style={{ color: 'red' }}
            />
            <Field name='email' type='email' placeholder='email' />
            <ErrorMessage name='email' component={'div'} />
            <Field name='password' type='password' placeholder='password' />
            <ErrorMessage name='password' component={'div'} />
            <Field name='isAgree' type='checkbox' />
            <button type='submit' disabled={condition}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
