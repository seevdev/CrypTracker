import React from 'react';
import './InfoMenu.scss';

const InfoMenu = () => {
  return (
    <div className='info-container '>
      <span>
        <button>Add to Fav</button>
      </span>
      <span>
        <button>More Info</button>
      </span>
    </div>
  );
};

export default InfoMenu;
