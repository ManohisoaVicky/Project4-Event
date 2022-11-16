import React from 'react'

import "./Input.css"

function Input(props) {

  let element = 
  props.name === "name" || props.name === "duration" ? (
    <input
    type={props.type}
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    placeholder={props.placeholder}
    className={props.name}
    />
  ) :
   props.name === "description" ? (
    <textarea
    value={props.value}
    name={props.name}
    onChange={(e) => props.handleChange(e)}
    rows={props.rows || 3}
    className={props.name}
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
  ) : <></>


  return (
    <div>
      <label>{props.label}</label>
      {element}
    </div>
  )
}

export default Input