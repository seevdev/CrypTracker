import React, { Fragment, SyntheticEvent } from 'react';
import reactDom from 'react-dom';

import './Modal.scss';

interface BackdropProps {
  onClick: () => {};
}
interface ModalOverlayProps {
  children: React.ReactNode;
}

interface Modal {
  onClick: SyntheticEvent
  children: React.ReactNode;
}

const Backdrop = (props: BackdropProps): JSX.Element => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const ModalOverlay = (props: ModalOverlayProps): JSX.Element => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById('overlays');
const Modal = (props: any): JSX.Element => {
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
