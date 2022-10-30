import React from 'react';

const fetchCtx = React.createContext({
  fetchCoins: () => {},
});

export default fetchCtx;
