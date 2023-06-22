import Header from 'components/Header';
import SignUpForm from 'components/forms/SignUpForm';
import React from 'react';

function SignUpPage() {
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
