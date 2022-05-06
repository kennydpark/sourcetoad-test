import React from 'react';

const Button = props => {
  const zero = () => {
    if (props.buttonKey === "0") {
      return 'zero';
    } else {
      return '';
    };
  };

  const buttonClass = `Button ${props.type || ''} ${zero()}`;

  return (
    <div className={buttonClass} onClick={props.onClick(props.buttonKey)}>
      {props.buttonKey}
    </div>
  )
}

export default Button;
