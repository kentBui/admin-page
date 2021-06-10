import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./chart.scss";

interface ChartProps {
  title: string;
  data: {
    month: string;
    "Active user": number;
  }[];
  dataKey: string | number | (() => any);
  grid?: boolean;
}

const Chart: React.FC<ChartProps> = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {grid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Line
              dataKey={dataKey}
              type="monotone"
              stroke="#37fa10"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
