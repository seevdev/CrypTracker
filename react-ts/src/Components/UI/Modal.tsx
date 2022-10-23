import React, { Fragment } from 'react';
import reactDom from 'react-dom';
import { DivProps } from 'react-html-props';
import './Modal.scss';

const Backdrop = (props: any) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const ModalOverlay = (props: any) => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById('overlays');
const Modal = (props: any) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root')!
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement!
      )}
    </Fragment>
  );
};

export default Modal;
