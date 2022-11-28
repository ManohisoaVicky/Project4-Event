import React from 'react'

import "./Button.css"

function Button(props) {

  let button = 
  props.text === "DELETE" ? (
    <button onClick={props.handleDelete} >{props.text}</button>
  ) : props.text === "UPDATE" ? (
    <button onClick={props.toUpdatePage}>{props.text}</button>
  ) : props.text === "SUBMIT" ? (
    <button type={props.type} disabled={props.isDisabled} className={props.isDisabled ? "disabled" : "submit-btn"}>{props.text}</button>
  ) : props.text === "CANCEL" && (
    <button className='cancel-btn'>{props.text}</button>
  )
  return (
    <>
      {button}
    </>
  )
}

export default Button