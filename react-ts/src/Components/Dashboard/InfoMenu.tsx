import React, { useContext } from 'react';
import generalCtx from '../../store/general-context';
import { Coin } from '../../Utilities/types-general';
import Button from '../UI/Button';
import './InfoMenu.scss';

const InfoMenu = (props: any) => {
  const { coins, setFavCoins } = useContext(generalCtx);

  const coinFav = [
    ...coins.filter((coin) => coin.id === props.id),
  ];

  const addToFavHandler = () => {
    setFavCoins(coinFav);
  };

  return (
    <div className='info-container '>
      <span>
        <Button onClick={addToFavHandler}>Add to Fav</Button>
      </span>
      <span>
        <Button>More Info</Button>
      </span>
    </div>
  );
};

export default InfoMenu;
