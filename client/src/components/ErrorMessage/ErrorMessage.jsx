import React from 'react'

import "./ErrorMessage.css"

export default function ErrorMessage(props) {

    const message = 
    props.error === "authorization-error" ? (
        <div className='authorization-error-container'>
            <p>{props.text}</p>
        </div>
    ) : props.error === "input-validation-error" && (
      <p className='input-validation'>{props.text}</p>
    )

  return (
    <>
    {message}
    </>
  )
}
