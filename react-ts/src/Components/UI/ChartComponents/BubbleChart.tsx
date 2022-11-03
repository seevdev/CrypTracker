import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';

Chart.register(CategoryScale);

interface BubbleProps {
  options?: ChartOptions<'bubble'>;
  data: ChartData<'bubble'>;
  height: string | number;
  width: string | number;
}

function BubbleChart(props:any): JSX.Element {
  return (
    <div className='BarChart'>
      <Bar
        data={props.data}
        options={props.options}
        height={props.height}
        width={props.width}
      />
    </div>
  );
}

export default BubbleChart;
