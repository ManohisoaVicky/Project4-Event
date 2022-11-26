import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LogInPage.css';
import { login } from '../../utils/userService';
import useUser from '../../hooks/userUser';

import Input from '../../components/FormElements/Input/Input';
import "./LogInPage.css"

function LoginPage() {
  const navigate = useNavigate()
  const { handleSignupOrLogin } = useUser()

  const [state, setState] = useState({
    email: '',
    password: ''
  });

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

  return (
    <div className='authentication-form-container'>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className='authentication-form'>
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
        <div>
          <div>
            <button>Log In</button>&nbsp;&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
