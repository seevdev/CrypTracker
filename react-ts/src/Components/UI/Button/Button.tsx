import React from 'react';
import { ButtonProps } from 'react-html-props';
import './Button.scss';


const Button = (props: ButtonProps):JSX.Element => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
