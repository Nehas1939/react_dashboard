import React from "react";
import "./chart.css";
import {LineChart,Line,XAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts";

function Chart({ title, data, datakey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#3B3884"></XAxis>
          <Line type="monotone" dataKey={datakey} stroke="#3B3884" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;