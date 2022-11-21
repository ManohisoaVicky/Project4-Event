import React, { useState, useEffect } from 'react'
import useUser from '../../hooks/userUser' 

import Input from '../../components/FormElements/Input/Input'
import "./ProfileEditPage.css"

function ProfileEditPage() {

  const [state, setState] = useState()

  let { user } = useUser()

  useEffect(() => {
    setState(user)
    function setUsername() {
    if (state) {
      if (!state.username) {
        setState({...state, username: ""})
      }
    }
  }
  setUsername()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleChange = (e) => {
    setState((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div>
      { (user && state) && 
      <form>
        <Input
        type="text"
        label="First Name"
        name="first_name"
        value={state.first_name}
        handleChange={handleChange}
        placeholder="First Name"
        />
        <Input
        type="text"
        label="Last Name"
        name="last_name"
        value={state.last_name}
        handleChange={handleChange}
        placeholder="Last Name"
        />
        <Input
        type="text"
        label="Username"
        name="username"
        value={state.username || ""}
        handleChange={handleChange}
        placeholder="Username"
        />
        <Input 
        name="bio"
        value={state.bio || ""}
        handleChange={handleChange}
        label="Bio"
        />
      </form>
      }
    </div>
  )
}

export default ProfileEditPage