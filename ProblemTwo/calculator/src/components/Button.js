import React from 'react';

const Button = props => {
  const buttonClass = `Button ${props.type || ''}`

  return (
    <div className={buttonClass} onClick={props.onClick(props.buttonKey)}>
      {props.buttonKey}
    </div>
  )
}

export default Button;
