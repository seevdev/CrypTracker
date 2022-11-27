import React, { useContext, useEffect, useState } from 'react';

import {
  IconMenu,
  IconClose,
  TriangleUpIcon,
  TriangleDownIcon,
} from '../../../Utilities/Icons/Icons';
import { Coin } from '../../../Models/coinModel';
import InfoMenu from '../Info/InfoMenu';
import MoreInfo from '../Info/MoreInfo';
import Button from '../../UI/Button/Button';
import fetchCtx from '../../../store/fetch-context';
import generalCtx from '../../../store/general-context';
import './CoinItem.scss';

function CoinItem(props: Coin) {
  const { timeDiffGreater, updatedCoin, updateCoin } = useContext(fetchCtx);
  const { coins } = useContext(generalCtx);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);
  const [statsMenuOpen, setStatsMenuOpen] = useState(false);
  const [propsMenu, setPropsMenu] = useState<Coin>(props);

  useEffect(() => {
    if (timeDiffGreater) {
      updateCoin(props.id);
      setPropsMenu(updatedCoin);
    }
  }, [updatedCoin]);

  const infoMenuToggle = () => {
    setInfoMenuOpen((prev) => !prev);
  };

  const infoMenuOpenhandler = (value: boolean) => {
    setInfoMenuOpen(value);
  };
  const statsMenuOpenHandler = (value: boolean) => {
    setStatsMenuOpen(value);
  };

  const price = `$${props.price.toLocaleString('en-US')}`;

  let icon = IconMenu;
  if (infoMenuOpen) {
    icon = IconClose;
  }

  let weeklyPercentIcon = TriangleUpIcon;
  if (props.priceChange7dPercent < 0) {
    weeklyPercentIcon = TriangleDownIcon;
  }

  return (
    <div key={props.id} className='item'>
      <div className='coin-info-container'>
        <img src={props.image} />
        <span className='name'>{props.name}</span>
        <span className='price'>{price}</span>
        <div className='flex-row gap-s'>
          <span>{weeklyPercentIcon}</span>
          <span className='weekly-percent'>{`${props.priceChange7dPercent.toFixed(
            2
          )}% this week`}</span>
        </div>
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
          {...propsMenu}
        />
      )}
    </div>
  );
}

export default CoinItem;
