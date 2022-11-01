import React, { useContext, useEffect, useState } from 'react';
import generalCtx from '../../../store/general-context';
import Button from '../../UI/Button';
import './InfoMenu.scss';
import fetchCtx from '../../../store/fetch-context';

const InfoMenu = (props: any) => {
  const { coins, favCoins, setFavCoins } = useContext(generalCtx);
  const { updateCoin, setTimeDiffGreaterHandler } = useContext(fetchCtx);

  const addToFavHandler = () => {
    const [favCoin] = [...coins.filter((coin) => coin.id === props.id)];
    const containsCoin = favCoins.some((current) => favCoin.id === current.id);
    const favCoinsArr = [favCoin];
    console.log(favCoinsArr);
    containsCoin || setFavCoins(favCoinsArr);
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

  const onMoreInfoBtnHandler = () => {
    statsMenuHandler(true);
    infoMenuHandler(false);

    const [currentCoin] = coins.filter((curr) => curr.id === props.id);

    if (new Date().getTime() - currentCoin.time > 60 * 2 * 1000) {
      setTimeDiffGreaterHandler(true);
      updateCoin(props.id);
      console.log('updated');
    }
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
              onMoreInfoBtnHandler();
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
