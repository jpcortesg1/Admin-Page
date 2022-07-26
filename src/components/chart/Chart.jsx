import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      {title && <h3 className="chartTitle">{title}</h3>}

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        {data && (
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550BD" />
            {dataKey && (
              <Line type="monotone" dataKey={dataKey} stroke="#5550BD" />
            )}
            <Tooltip />
            {grid && <CartesianGrid stroke="#E0DFDF" strokeDasharray="5 5" />}
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
