import React from 'react';
import classes from './NavBarGreeting.module.scss';

const NavBarGreeting: React.FC = (props) => {
  return (
    <div className={classes.greeting}>
      <img src={'https://i.stack.imgur.com/ILTQq.png'} />
      <h1>Hello,Sam</h1>
    </div>
  );
};
export default NavBarGreeting;
