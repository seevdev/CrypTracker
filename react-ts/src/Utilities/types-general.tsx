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
  isSearching: boolean;
  // searchHandler(event: React.ChangeEvent<HTMLInputElement>)=>void;
  searchHandler: () => void;
  changeSearching: (a: boolean) => void;
  coinsChangeHandler: (val: Coin[]) => void;
  filteredCoinsChangeHandler: (val: Coin[]) => void;
  value?: any;
};
export type CoinName = {
  name: string;
};
