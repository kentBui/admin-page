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
  data: any[];
  dataKeyX: string;
  dataKeyLine: string | number | (() => any);
  grid?: boolean;
}

const Chart: React.FC<ChartProps> = ({
  title,
  data,
  dataKeyX,
  dataKeyLine,
  grid,
}) => {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {grid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={dataKeyX} />
            <YAxis />
            <Legend />
            <Tooltip />
            <Line
              dataKey={dataKeyLine}
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
