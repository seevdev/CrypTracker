import React, { useContext, useEffect, useState } from 'react';
import { Coin } from '../../Utilities/types-general';
import { IconMenu, IconClose } from '../../Utilities/Icons';
import InfoMenu from './Info/InfoMenu';
import MoreInfo from './Info/MoreInfo';
import Button from '../UI/Button';
import './CoinItem.scss';
import fetchCtx from '../../store/fetch-context';

function CoinItem(props: Coin) {
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);
  const [statsMenuOpen, setStatsMenuOpen] = useState(false);
  const [propsMenuInfo, setPropsMenuInfo] = useState({
    time: props.time,
    price14Days: props.price14Days,
    price30Days: props.price30Days,
    price60Days: props.price60Days,
    total: props.total,
    price: props.price,
    name: props.name,
    id: props.id,
    priceChangePercentageWeekly: props.priceChangePercentageWeekly,
    image: props.image,
  });

  const { timeDiffGreater, updatedCoin } = useContext(fetchCtx);

  useEffect(() => {
    if (timeDiffGreater) {
      setPropsMenuInfo({
        time: updatedCoin.time,
        price14Days: updatedCoin.price14Days,
        price30Days: updatedCoin.price30Days,
        price60Days: updatedCoin.price60Days,
        total: updatedCoin.total,
        price: updatedCoin.price,
        name: updatedCoin.name,
        id: updatedCoin.id,
        priceChangePercentageWeekly: updatedCoin.priceChangePercentageWeekly,
        image: updatedCoin.image,
      });
    }
  }, [timeDiffGreater]);

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
        <span className='weekly-percent'>{`${props.priceChangePercentageWeekly}% this week`}</span>
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
