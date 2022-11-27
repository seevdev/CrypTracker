import { DivProps } from 'react-html-props';
import { Coin } from '../../../Models/coinModel';
import Modal from '../../UI/Modal/Modal';
import './MoreInfo.scss';

const MoreInfo = (props: Coin & DivProps): JSX.Element => {
  return (
    <Modal onClick={props.onClick}>
      <div className='more-info--container'>
        <h2>Stats for {props.name}</h2>
        <div className='minfo-table'>
          <span>Current Price:</span>
          <span>{`${props.price.toFixed(2)} $`}</span>
          <span>Price 14 days:</span>
          <span>{`${props.price14Days.toFixed(2)} $`}</span>
          <span>Price 30 days:</span>
          <span>{`${props.price30Days.toFixed(2)} $`}</span>
          <span>Price 60 days</span>
          <span>{`${props.price60Days.toFixed(2)} $`}</span>
          <span>Total</span>
          <span>{`${props.total} $`}</span>
        </div>
      </div>
    </Modal>
  );
};

export default MoreInfo;
