import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Picture', 'Sound', 'Connectivity', 'Deliver', 'Installation', 'OS usability'],
  datasets: [
    {
      label: 'Performance Specs',
      data: [8, 9, 8, 6, 8, 9],
      backgroundColor: 'plum',
      borderColor: 'white',
      borderWidth: 1,
    },
  ],
};

export function ProductRadar() {
  return <Radar  data={data} />;
}
