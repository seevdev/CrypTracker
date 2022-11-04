import React, { useContext, useEffect, useState } from 'react';
import { Coin } from '../../Utilities/types-general';
import { IconMenu, IconClose } from '../../Utilities/Icons';
import InfoMenu from './Info/InfoMenu';
import MoreInfo from './Info/MoreInfo';
import Button from '../UI/Button';
import fetchCtx from '../../store/fetch-context';
import './CoinItem.scss';

function CoinItem(props: Coin) {
  const { timeDiffGreater, updatedCoin } = useContext(fetchCtx);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);
  const [statsMenuOpen, setStatsMenuOpen] = useState(false);
  const [propsMenuInfo, setPropsMenuInfo] = useState({
    time: props.time,
    price14Days: props.price14Days,
    price30Days: props.price30Days,
    price60Days: props.price60Days,
    priceChange1h: props.priceChange1h,
    priceChange1y: props.priceChange1y,
    priceChange7d: props.priceChange7d,
    priceChange200d: props.priceChange200d,
    symbol: props.symbol,
    high24h: props.high24h,
    total: props.total,
    price: props.price,
    name: props.name,
    id: props.id,
    priceChange7dPercent: props.priceChange7dPercent,
    image: props.image,
  });

  useEffect(() => {
    if (timeDiffGreater) {
      setPropsMenuInfo({
        time: updatedCoin.time,
        price14Days: updatedCoin.price14Days,
        price30Days: updatedCoin.price30Days,
        price60Days: updatedCoin.price60Days,
        priceChange1h: updatedCoin.priceChange1h,
        priceChange1y: updatedCoin.priceChange1y,
        priceChange7d: updatedCoin.priceChange7d,
        priceChange200d: updatedCoin.priceChange200d,
        symbol: updatedCoin.symbol,
        high24h: updatedCoin.high24h,
        total: updatedCoin.total,
        price: updatedCoin.price,
        name: updatedCoin.name,
        id: updatedCoin.id,
        priceChange7dPercent: updatedCoin.priceChange7dPercent,
        image: updatedCoin.image,
      });
    }
  }, [timeDiffGreater, updatedCoin]);

  const infoMenuToggle = () => {
    setInfoMenuOpen((prev) => !prev);
  };

  const infoMenuOpenhandler = (value: boolean) => {
    setInfoMenuOpen(value);
  };
  const statsMenuOpenHandler = (value: boolean) => {
    setStatsMenuOpen(value);
  };

  const price = `$${Math.trunc(props.price).toLocaleString('en-US')}`;

  let icon = IconMenu;
  if (infoMenuOpen) {
    icon = IconClose;
  }

  return (
    <div key={props.id} className='item'>
      <div className='coin-info-container'>
        <img src={props.image} />
        <span className='name'>{props.name}</span>
        <span className='price'>{price}</span>
        <span className='weekly-percent'>{`${props.priceChange7dPercent}% this week`}</span>
      </div>

      <Button onClick={infoMenuToggle}>
        <span>{icon}</span>
      </Button>

      {infoMenuOpen && (
        <InfoMenu
          id={props.id}
          onInfoMenuOpen={infoMenuOpenhandler}
          onStatsMenu={statsMenuOpenHandler}
        />
      )}

      {statsMenuOpen && (
        <MoreInfo
          onClick={() => {
            setStatsMenuOpen(false);
          }}
          {...propsMenuInfo}
        />
      )}
    </div>
  );
}

export default CoinItem;
