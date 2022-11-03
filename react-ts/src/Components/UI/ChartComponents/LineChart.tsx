import React from 'react';

import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

import './LineChart.scss';

interface LineProps {
  options?: ChartOptions<'line'>;
  data: ChartData<'line'>;
  height: string | number;
  width: string | number;
}
const LineChart = (props: LineProps) => {
  return (
    <div className='line-chart--container'>
      <Line
        data={props.data}
        options={props.options}
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default LineChart;
