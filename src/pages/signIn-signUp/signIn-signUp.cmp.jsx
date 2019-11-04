import React from 'react';
import './signIn-signUp.scss';
import SignIn from '../../components/sign-in/sign-in.cmp';
import SignUp from '../../components/sign-up/sign-up.cpm';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;