import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Chart = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
      <YAxis domain={[0, 'dataMax+2']} />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" label={{ position: 'top' }} />
    </BarChart>
  );
};

export default Chart;
