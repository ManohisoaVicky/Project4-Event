import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LogInPage.css';
import { login } from '../../utils/userService';
import useUser from '../../hooks/userUser';

function LoginPage() {
  const navigate = useNavigate()
  const { handleSignupOrLogin } = useUser()

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formState);
      handleSignupOrLogin();
      navigate('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input type="email" placeholder="Email" value={formState.email} name="email" onChange={handleChange} />
          </div>
        </div>
        <div>
          <div>
            <input type="password" placeholder="Password" value={formState.password} name="password" onChange={handleChange} />
          </div>
        </div>
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
