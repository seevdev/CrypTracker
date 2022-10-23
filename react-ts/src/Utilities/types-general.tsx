export type Children = {
  children?: React.ReactNode;
};

export type Coin = {
  image: string;
  price: number;
  priceChangePercentageWeekly: number;
  name: string;
  id: number | string;
  children?: React.ReactNode;
  currentCoins?: any;
};

export type generalCtxType = {
  coins: Coin[];
  filteredCoins: Coin[];
  favCoins: Coin[];
  isSearching: boolean;
  changeSearching: (a: boolean) => void;
  coinsChangeHandler: (val: Coin[]) => void;
  filteredCoinsChangeHandler: (val: Coin[]) => void;
  setFavCoins: (val: Coin[]) => void;
  value?: any;
};
export type CoinName = {
  name: string;
};

export type AddInfo = {
  name: string;
  price: number;
  price14Days: number;
  price30Days: number;
  price60Days: number;
  total: number;
};
