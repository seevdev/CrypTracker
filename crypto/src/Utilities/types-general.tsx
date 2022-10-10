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
