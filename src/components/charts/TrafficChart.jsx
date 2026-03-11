import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Typography } from "@mui/material";

const data = [
  { name: "Jan", traffic: 1200 },
  { name: "Feb", traffic: 1100 },
  { name: "Mar", traffic: 1500 },
  { name: "Apr", traffic: 1700 },
  { name: "May", traffic: 1600 },
  { name: "Jun", traffic: 1800 },
  { name: "Jul", traffic: 1900 },
];

function TrafficChart() {
  return (
    <div style={{ width: "100%", height: "350px", marginTop: "20px" }}>
      <Typography variant="h6" align="center" gutterBottom>
        Website Traffic Trends
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: "Months", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Website Traffic", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="traffic" stroke="#ff9800" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficChart;