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
  { name: "Jan", revenue: 2400 },
  { name: "Feb", revenue: 2210 },
  { name: "Mar", revenue: 2290 },
  { name: "Apr", revenue: 2000 },
  { name: "May", revenue: 2181 },
  { name: "Jun", revenue: 2500 },
  { name: "Jul", revenue: 2100 },
];

function RevenueChart() {
  return (
    <div style={{ width: "100%", height: "350px", marginTop: "20px" }}>
      <Typography variant="h6" align="center" gutterBottom>
        Monthly Revenue
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: "Months", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Revenue in USD ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#4caf50" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;