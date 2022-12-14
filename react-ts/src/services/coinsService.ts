import { Coin } from '../Models/coinModel';
import { Data } from '../Models/APIDataModel';

class CoinsServices {
  dataFormatter = function (data: Data.RootObject[] | Data.RootObject): Coin[] {
    let dataArr = data instanceof Array ? [...data] : [{ ...data }];

    return dataArr.map((item: Data.RootObject): Coin => {
      return {
        id: item.id,
        image: item.image.large,
        name: item.name,
        price: item.market_data.current_price.usd,
        priceChange7dPercent: item.market_data.price_change_percentage_7d,

        price30Days: item.market_data.price_change_percentage_30d,
        price60Days: item.market_data.price_change_percentage_60d,
        high24h: item.market_data.high_24h.usd,
        priceChange200d:
          item.market_data.price_change_percentage_200d_in_currency.usd,
        price14Days:
          item.market_data.price_change_percentage_14d_in_currency.usd,

        priceChange7d:
          item.market_data.price_change_percentage_7d_in_currency.usd,
        priceChange1y:
          item.market_data.price_change_percentage_1y_in_currency.usd,
        priceChange1h:
          item.market_data.price_change_percentage_1h_in_currency.usd,
        symbol: item.symbol,
        total: item.market_data.total_volume.usd,
        time: new Date().getTime(),
      };
    });
  };

  fetchCoins = async (url: string) => {
    let response = await fetch(url);

    const data = await response.json();

    return this.dataFormatter(data);
  };
}

export const coinsServices = new CoinsServices();
