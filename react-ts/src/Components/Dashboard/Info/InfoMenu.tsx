import React, { useContext, useEffect, useState } from 'react';
import generalCtx from '../../../store/general-context';
import useFetch from '../../../Hooks/useFetch';
import Button from '../../UI/Button';
import './InfoMenu.scss';

const InfoMenu = (props: any) => {
  
  const [statsBtnClicked, setStatsBtnClicked] = useState(false);

  const { coins, favCoins, setFavCoins } = useContext(generalCtx);

  const addToFavHandler = () => {
    const [favCoin] = [...coins.filter((coin) => coin.id === props.id)];
    const containsCoin = favCoins.some((current) => favCoin.id === current.id);
    containsCoin || setFavCoins(favCoin);
  };

  useEffect(() => {
    window.localStorage.setItem('favCoins', JSON.stringify(favCoins));
  }, [favCoins]);

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
        }}
        className='info-backdrop'
      ></div>
      <div className='info-container '>
        <span>
          <Button
            onClick={() => {
              addToFavHandler();
              infoMenuHandler(false);
            }}
          >
            Add to Fav
          </Button>
        </span>
        <span>
          <Button
            onClick={() => {
              statsMenuHandler(true);
              infoMenuHandler(false);
              setStatsBtnClicked(true);
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
