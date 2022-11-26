import React from 'react'

import "./Input.css"

function Input(props) {

  let element = 
  props.name === "name" ? (
    <input
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    placeholder={props.placeholder}
    className={props.name}
    label={props.label}
    />
  ) :
   props.name === "description" || props.name === "bio" ? (
    <textarea
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    rows={props.rows || 3}
    className={props.name}
    label={props.label}
    />
  ) : props.name === "date" ? (
    <input
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    className={props.name}
    />
  ) : props.name === "time" ? (
    <input
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    className={props.name}
    />
  ) : props.name === "duration" ? (
    <select
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    className={props.name}
    >
      <option value={props.defaultOption} defaultValue={props.defaultOption}></option>
      <option value={props.option1}>{props.option1}</option>
      <option value={props.option2}>{props.option2}</option>
      <option value={props.option3}>{props.option3}</option>
    </select>
  ) : (props.name === "first_name" || props.name === "last_name" || props.name === "username") ? (
    <input 
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    className={props.name}
    placeholder={props.placeholder}
    />
  ) : props.name === "email" ? (
    <input 
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    placeholder={props.placeholder}
    />
  ) : (props.name === "password" || props.name === "password_confirmation") ? (
    <input 
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    placeholder={props.placeholder}
    autoComplete={props.autoComplete}
    />
  ) : props.name === "search" && (
    <input
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    placeholder={props.placeholder}
    />
  )

  return (
    <div className='custom-input-container'>
      {props.label && <label className='custom-input-label'>{props.label}</label>}
      {element}
    </div>
  )
}

export default Input