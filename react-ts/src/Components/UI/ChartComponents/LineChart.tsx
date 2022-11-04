import React from 'react';

import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface LineProps {
  type: string;
  options?: ChartOptions<'line'>;
  data: ChartData<'line'>;
}
const LineChart = (props: LineProps) => {
  return (
    <div>
      <Line data={props.data} options={props.options} />
    </div>
  );
};

export default LineChart;
