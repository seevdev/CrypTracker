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

export type SearchCtx = {
  coins: Coin[];
  isSearching: boolean;
  // searchHandler(event: React.ChangeEvent<HTMLInputElement>)=>void;
  searchHandler: ()=> void;
  value?: any;
};
