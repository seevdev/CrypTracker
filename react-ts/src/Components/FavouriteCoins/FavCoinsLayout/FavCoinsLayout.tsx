import React from 'react';
import GeneralCtxProvider from '../../../store/GeneralCtxProvider';
import ThemeContextProvider from '../../../store/ThemeContextProvider';
import FavCoins from '../FavCoins/FavCoins';
import Sidemenu from '../../Sidemenu/Sidemenu';
import Header from '../../Header/Header';

import './FavCoinsLayout.scss';

function FavCoinsLayout(): JSX.Element {
  return (
    <GeneralCtxProvider>
      <ThemeContextProvider>
        <div className='FavCoinsLayout'>
          <Sidemenu />
          <Header />
          <FavCoins />
        </div>
      </ThemeContextProvider>
    </GeneralCtxProvider>
  );
}

export default FavCoinsLayout;
