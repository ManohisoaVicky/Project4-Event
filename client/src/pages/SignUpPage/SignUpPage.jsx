import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../utils/userService'
import useUser from '../../hooks/userUser'

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
    <div>
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit} >
        <Input
        type="text"
        name="username"
        value={state.username || ""}
        handleChange={handleChange}
        placeholder="Username"
        />
        <Input
        type="text"
        name="first_name"
        value={state.first_name}
        handleChange={handleChange}
        placeholder="First Name"
        />
        <Input
        type="text"
        name="last_name"
        value={state.last_name}
        handleChange={handleChange}
        placeholder="Last Name"
        />
        <Input 
        type="email"
        name="email"
        value={state.email}
        handleChange={handleChange}
        placeholder="Email"
        />
        <Input 
        type="password"
        name="password"
        value={state.password}
        handleChange={handleChange}
        placeholder="Password"
        autoComplete="on"
        />
        <Input 
        type="password_confirmation"
        name="password_confirmation"
        value={state.password_confirmation}
        handleChange={handleChange}
        placeholder="Confirm Password"
        autoComplete="on"
        />
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