import { useContext, useState } from 'react';
import generalCtx from '../../store/general-context';
import LineChart from '../UI/ChartComponents/LineChart';

import Card from '../UI/Card/Card';
import classes from './CoinPurchaseArea.module.css';

const CoinPurchaseArea =  function CoinPurchasePage(): JSX.Element {
  const { currentCoin } = useContext(generalCtx);
  const [data, setData] = useState([]);

  const chartData = {
    labels: [
      '1 year',
      '200 days',
      '60 days',
      'Month',
      '14 days',
      'Week',
      'Today',
      'Last hour',
    ],
    datasets: [
      {
        label: `${currentCoin?.name} Currency Dynamics`,
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='CoinPurchasePage'>
      <div>
        <span></span>
        <span>{currentCoin?.name}</span>
      </div>
      <div>
        <Card>
          <span>Statistics</span>
          <div className='stats-container'>
            <span>Last year:</span>
            <span>{currentCoin?.priceChange1y}</span>
            <span>Last month</span>
            <span>{currentCoin?.price30Days}</span>
            <span>Last week:</span>
            <span>{currentCoin?.priceChange7d}</span>
            <span>Last 24h:</span>
            <span>{currentCoin?.high24h}</span>
          </div>
        </Card>
        <Card>
          <span>Annual Change</span>
          <LineChart type={'line'} data={chartData} />
        </Card>
      </div>
      <button>Add to
        
         cart</button>
    </div>
  );
}

export default CoinPurchaseArea;
