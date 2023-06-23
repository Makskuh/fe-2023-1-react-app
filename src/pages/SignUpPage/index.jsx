import React from 'react';
import * as yup from 'yup';
import Header from 'components/Header';
import SignUpForm from 'components/forms/SignUpForm';

const SIGN_UP_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.{0,}[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%^&*]).{8,32}$/)
    .required(),
  firstName: yup
    .string()
    .matches(/^[A-Z][a-z]{1,16}$/)
    .required(),
  lastName: yup
    .string()
    .matches(/^[A-Z][a-z]{1,16}$/)
    .required(),
});

const user1 = {
  firstName: 'Test',
  lastName: 'User',
  password: '1234EDA4%df',
  email: 'test@test.test',
};

const user2 = {
  firstName: '',
  lastName: '',
  password: '%',
  email: '',
};

function SignUpPage() {
  // методи повертають булевий вираз
  // console.log(SIGN_UP_SCHEMA.isValid(user2));
  // console.log(SIGN_UP_SCHEMA.isValidSync(user2));

  // при успішній валідації повертає відвалідоване значення
  // інакше кидає помилку
  // console.log(SIGN_UP_SCHEMA.validate(user2));
  // console.log(SIGN_UP_SCHEMA.validateSync(user2));

  return (
    <>
      <Header />
      <main>
        <h1>Sign up now!</h1>
        <SignUpForm />
      </main>
    </>
  );
}

export default SignUpPage;
