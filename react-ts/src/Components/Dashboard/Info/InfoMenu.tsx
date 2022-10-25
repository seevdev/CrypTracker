import React, { useContext, useEffect } from 'react';
import generalCtx from '../../../store/general-context';
import Button from '../../UI/Button';
import './InfoMenu.scss';


const InfoMenu = (props: any) => {
  
  const { coins, setFavCoins, favCoins } = useContext(generalCtx);

  const addToFavHandler = () => {
    const [favCoin] = [...coins.filter((coin) => coin.id === props.id)];
    setFavCoins(favCoin);
  };

  useEffect(() => {
    window.localStorage.setItem('favCoins', JSON.stringify(favCoins));
  }, [favCoins, favCoins]);


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
