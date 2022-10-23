import React, { useContext } from 'react';
import generalCtx from '../../../store/general-context';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import './InfoMenu.scss';

const InfoMenu = (props: any) => {
  
  const { coins, setFavCoins } = useContext(generalCtx);

  const addToFavHandler = () => {
    const coinFav = [...coins.filter((coin) => coin.id === props.id)];
    setFavCoins(coinFav);
  };

  const statsMenuHandler = (value: boolean) => {
    props.onStatsMenu(value);
  };
  const infoMenuHandler = (value: boolean) => {
    props.onInfoMenuOpen(value);
  };

  return (
    <>
      <div
        onClick={() => {
          infoMenuHandler(false);
          console.log('clicked');
        }}
        className='info-backdrop'
      ></div>
      <div className='info-container '>
        <span>
          <Button onClick={addToFavHandler}>Add to Fav</Button>
        </span>
        <span>
          <Button
            onClick={() => {
              statsMenuHandler(true);
              infoMenuHandler(false);
            }}
          >
            More Info
          </Button>
        </span>
      </div>
    </>
  );
};

export default InfoMenu;
