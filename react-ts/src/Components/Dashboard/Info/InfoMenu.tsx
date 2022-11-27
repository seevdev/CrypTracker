import React, { useContext, useEffect, useState } from 'react';
import generalCtx from '../../../store/general-context';
import Button from '../../UI/Button/Button';
import fetchCtx from '../../../store/fetch-context';
import './InfoMenu.scss';
import { Coin } from '../../../Models/coinModel';

interface InfoMenuProps {
  id: string;
  onInfoMenuOpen: (val: boolean) => {};
  onStatsMenu: (val: boolean) => {};
}

const InfoMenu = (props: any): JSX.Element => {
  const { coins, favCoins, setFavCoins } = useContext(generalCtx);
  const { updateCoin, setTimeDiffGreaterHandler } = useContext(fetchCtx);

  const addToFavHandler = () => {
    const [favCoin] = [...coins.filter((coin: Coin) => coin.id === props.id)];
    const containsCoin = favCoins.some(
      (current: Coin) => favCoin.id === current.id
    );
    const favCoinsArr = [...favCoins];
    favCoinsArr.push(favCoin);
    !containsCoin && setFavCoins(favCoinsArr);
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
              if (favCoins.length < 7) {
                addToFavHandler();
              } else {
                alert('You can add maximum 7 coins');
              }

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
