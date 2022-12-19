import { useContext } from 'react';
import generalCtx from '../../../store/general-context';
import Button from '../../UI/Button/Button';
import { Coin } from '../../../Models/coinModel';
import classes from './StalkingCoin.module.scss';

interface StalkingCoinProps {
  name: string;
  image: string;
  priceChangePercentageWeekly: number;
  id: string;
  number: number;
  symbol: string;
}
const StalkingCoin = function (props: StalkingCoinProps): JSX.Element {
  const { favCoins, setFavCoins } = useContext(generalCtx);

  const stalkingCoinDeleteHandler = () => {
    const filteredFavCoins = [
      ...favCoins.filter((favCoin: Coin) => favCoin.id !== props.id),
    ];
    setFavCoins(filteredFavCoins);
  };
  return (
    <div className={classes['stalking-coin']}>
      <div className={classes.flex}>
        <span>{props.number + 1}</span>
        <img src={props.image} />
        <div>{props.name}</div>
      </div>

      <div className={classes.flex}>
        <div className={classes['stalking-coin--graph']}>Temporary deign</div>
        <Button onClick={stalkingCoinDeleteHandler}>X</Button>
      </div>
    </div>
  );
};

export default StalkingCoin;
