export interface Children  {
  children?: React.ReactNode;
};

export interface Coin {
  image: string;
  name: string;
  id: string;
  currentCoins?: any;
  price: number;
  priceChange1h: number;
  priceChange1y: number;
  priceChange7d: number;
  price14Days: number;
  price30Days: number;
  price60Days: number;
  priceChange200d: number;
  priceChange7dPercent: number;
  high24h: number;
  total: number;
  time: number;
  symbol: string;
  children?: React.ReactNode;
}


