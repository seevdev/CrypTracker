import React from 'react';
import classes from './NavBarGreeting.module.scss';

const NavBarGreeting: React.FC = (props) => {
  return (
    <div className={classes.greeting}>
      <img src={'https://i.stack.imgur.com/ILTQq.png'} />
      <h2>Hello,Sam</h2>
    </div>
  );
};
export default NavBarGreeting;
