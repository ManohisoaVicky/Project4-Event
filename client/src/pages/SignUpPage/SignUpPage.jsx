import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../utils/userService'
import useUser from '../../hooks/userUser'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Input from '../../components/FormElements/Input/Input'
import "./SignUpPage.css"

function SignUpPage() {

  const navigate = useNavigate()
  const { handleSignupOrLogin } = useUser()

  const [state, setState] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const [firstTouched, setFirstTouched] = useState(false)
  const [lastTouched, setLastTouched] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [passTouched, setPassTouched] = useState(false)
  const [passConfTouched, setPassConfTouched] = useState(false)

  const firstNameValid = state.first_name.trim()!== ""
  const lastNameValid = state.last_name.trim()!== "" 
  const emailValid = state.email.trim() !== "" && validateEmail(state.email)
  const passValid = state.password.trim() !== "" && validatePassword(state.password)
  const passConfValid = state.password.trim() !== "" && compare(state.password, state.password_confirmation)

  const firstNameInvalid = firstTouched && !firstNameValid
  const lastNameInvalid = lastTouched && !lastNameValid
  const emailInvalid = emailTouched && !emailValid
  const passInvalid = passTouched && !passValid
  const passConfInvalid = passConfTouched && !passConfValid

  function validateEmail(input) {
    const validRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return input.match(validRegex)
  }

  function validatePassword(input) {
    const validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    return input.match(validRegex)
  }

  function compare(pass, passConf) {
    return pass === passConf
  }

  const blurHandler = (e) => {
    if (e.target.name === "first_name") {
      setFirstTouched(true)
    }
    if (e.target.name === "last_name") {
      setLastTouched(true)
    }
    if (e.target.name === "email") {
      setEmailTouched(true)
    }
    if (e.target.name === "password") {
      setPassTouched(true)
    }
    if (e.target.name === "password_confirmation") {
      setPassConfTouched(true)
    }
  }

  const handleChange = (e) => {
    setState((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(state)
      handleSignupOrLogin()
      navigate('/')
    } catch (error) {
      alert(error.message)
      console.log(error.message)
    }
  }

  const isFormInvalid = () => {
    return !(state.first_name && state.last_name && state.email && state.password === state.password_confirmation);
  }

  return (
    <div className='authentication-form-container'>
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit} className="authentication-form">
        <Input
        type="text"
        name="username"
        value={state.username || ""}
        handleChange={handleChange}
        blurHandler={blurHandler}
        placeholder="Username"
        />
        <Input
        type="text"
        name="first_name"
        value={state.first_name}
        handleChange={handleChange}
        blurHandler={blurHandler}
        placeholder="First Name"
        />
        {firstNameInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid first name." /> }
        <Input
        type="text"
        name="last_name"
        value={state.last_name}
        handleChange={handleChange}
        blurHandler={blurHandler}
        placeholder="Last Name"
        />
        {lastNameInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid last name." /> }
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
        {passInvalid && <ErrorMessage error="input-validation-error" text="Please provide a valid password. Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" /> }
        <Input 
        type="password"
        name="password_confirmation"
        value={state.password_confirmation}
        handleChange={handleChange}
        blurHandler={blurHandler}
        placeholder="Confirm Password"
        autoComplete="on"
        />
        {passConfInvalid && <ErrorMessage error="input-validation-error" text="The password and password confirmation do not match" /> }
        <div>
          <div>
            <button  disabled={isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage