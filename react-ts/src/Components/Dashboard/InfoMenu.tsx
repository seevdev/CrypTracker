import React from 'react';
import './InfoMenu.scss';
import Button from '../UI/Button';

const InfoMenu = () => {
const addToFavHandler = ()=>{
  
}

  return (
    <div className='info-container '>
      <span>
      <Button>Add to Fav</Button>
      </span>
      <span>
      <Button>More Info</Button>
      </span>
    </div>
  );
};

export default InfoMenu;
