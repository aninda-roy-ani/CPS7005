// PolarAreaChart.jsx
import React from 'react';
import Menu from '../components/menu';
import { PolarArea } from 'react-chartjs-2';
import { Chart, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';

// Register necessary components
Chart.register(ArcElement, RadialLinearScale, Tooltip, Legend);

const PolarAreaChart = ({ data }) => {
  return (
    <>
        <Menu />
        <PolarArea data={data} />
    </>
  );
};

export default PolarAreaChart;
