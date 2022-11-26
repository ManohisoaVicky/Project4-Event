import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../utils/userService';
import useUser from '../../hooks/userUser';
import { isEmpty, validateEmail, validatePassword } from '../../utils/validations';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Button from '../../components/FormElements/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import "./LogInPage.css"

function LoginPage() {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const [emailTouched, setEmailTouched] = useState(false)
  const [passTouched, setPassTouched] = useState(false)

  const emailValid = isEmpty(state.email) && validateEmail(state.email)
  const passValid = isEmpty(state.password) && validatePassword(state.password)

  const emailInvalid = emailTouched && !emailValid
  const passInvalid = passTouched && !passValid

  const navigate = useNavigate()

  const { handleSignupOrLogin } = useUser()

  const blurHandler = (e) => {
    if (e.target.name === "email") {
      setEmailTouched(true)
    } 
    if (e.target.name === "password") {
      setPassTouched(true)
    }
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(state);
      handleSignupOrLogin();
      navigate('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  const formIsValid = !(emailValid && passValid)

  return (
    <div className='authentication-form-container'>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className='authentication-form'>
      <Input 
        type="email"
        name="email"
        value={state.email}
        handleChange={handleChange}
        blurHandler={blurHandler}
        placeholder="Email"
        />
        {emailInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid email." /> }
        <Input 
        type="password"
        name="password"
        value={state.password}
        handleChange={handleChange}
        blurHandler={blurHandler}
        placeholder="Password"
        autoComplete="on"
        />
        {passInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid password." /> }
        <div>
          <div>
            <Button text="SUBMIT" isDisabled={formIsValid} />
            <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
