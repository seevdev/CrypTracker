import React from 'react';
import { DivProps } from 'react-html-props';
import { AddInfo } from '../../../Utilities/types-general';
import Modal from '../../UI/Modal';

const MoreInfo = (props: AddInfo & DivProps) => {
  return (
    <Modal onClick={props.onClick}>
      <div>
        <h2>Stats for {props.name}</h2>
        <div className='minfo-table'>
          <span>Current Price:</span>
          <span>{props.price}</span>
          <span>Price 14 days:</span>
          <span>{props.price14Days}</span>
          <span>Price 30 days:</span>
          <span>{props.price30Days}</span>
          <span>Price 60 days</span>
          <span>{props.price60Days}</span>
          <span>Total</span>
          <span>{props.total}</span>
        </div>
      </div>
    </Modal>
  );
};

export default MoreInfo;
