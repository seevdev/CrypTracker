import React from 'react';
import { ButtonProps } from 'react-html-props';
import './Button.scss';
const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
