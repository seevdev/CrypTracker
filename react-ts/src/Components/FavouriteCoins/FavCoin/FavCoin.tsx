import React, { useContext } from 'react';

import generalCtx from '../../../store/general-context';
import Button from '../../UI/Button/Button';
import './FavCoin.scss';

interface FavCoinProps {
  name: string;
  image: string;
  priceChangePercentageWeekly: number;
  id: string;
  number: number;
  symbol: string;
}
function FavCoin(props: FavCoinProps): JSX.Element {
  const { favCoins, setFavCoins } = useContext(generalCtx);

  const favCoinDeleteHandler = () => {
    const filteredFavCoins = [
      ...favCoins.filter((favCoin) => favCoin.id !== props.id),
    ];
    setFavCoins(filteredFavCoins);
  };
  return (
    <div className='FavCoin'>
      <div className='flex'>
        <span>{props.number + 1}</span>
        <img src={props.image} />
        <div>{props.name}</div>
      </div>

      <div className='flex graph-container'>
        <div className='fav-coin--graph'>Temporary deign</div>
        <Button onClick={favCoinDeleteHandler}>X</Button>
      </div>
    </div>
  );
}

export default FavCoin;
