import React from 'react';
import GeneralCtxProvider from '../../store/GeneralCtxProvider';
import ThemeContextProvider from '../../store/ThemeContextProvider';
import FavCoins from '../../Components/FavouriteCoins/FavCoins/FavCoins';
import Sidemenu from '../../Components/Sidemenu/Sidemenu';
import Header from '../../Components/Header/Header';

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
