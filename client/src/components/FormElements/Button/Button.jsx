import React from 'react'

import "./Button.css"

function Button(props) {

  let button = 
  props.text === "DELETE" && (
    <button onClick={props.handleDelete} >{props.text}</button>
  ) 

  return (
    <div>
      {button}
    </div>
  )
}

export default Button