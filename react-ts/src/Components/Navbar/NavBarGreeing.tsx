import React from 'react';
import './NavBarGreeting.scss';

const NavBarGreeting = (props: any) => {
  return (
    <div className='greeting'>
      <img src={'https://i.stack.imgur.com/ILTQq.png'} />
      <h2>Hello,Sam</h2>
    </div>
  );
};
export default NavBarGreeting;
