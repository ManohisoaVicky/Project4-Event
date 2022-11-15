import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../utils/userService'
import useUser from '../../hooks/userUser'

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
      await userService.signup(state)
      handleSignupOrLogin()
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  const isFormInvalid = () => {
    return !(state.first_name && state.last_name && state.email && state.password === state.password_confirmation);
  }

  return (
    <div>
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <div>
            <input type="text" placeholder="Username" value={state.username} name="username" onChange={handleChange} />
          </div>
        </div>
        <div>
          <div>
            <input type="text" placeholder="First Name" value={state.first_name} name="first_name" onChange={handleChange} />
          </div>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Last Name" value={state.last_name} name="last_name" onChange={handleChange} />
          </div>
        </div>
        <div>
          <div>
            <input type="email" placeholder="Email" value={state.email} name="email" onChange={handleChange} />
          </div>
        </div>
        <div>
          <div>
            <input type="password" placeholder="Password" value={state.password} name="password" onChange={handleChange} />
          </div>
        </div>
        <div>
          <div>
            <input type="password" placeholder="Confirm Password" value={state.password_confirmation} name="password_confirmation" onChange={handleChange} />
          </div>
        </div>
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