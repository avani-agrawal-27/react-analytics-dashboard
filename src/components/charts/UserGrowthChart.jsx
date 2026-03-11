import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 700 },
  { name: "May", users: 600 },
  { name: "Jun", users: 800 },
  { name: "Jul", users: 900 },
];

function UserGrowthChart() {
  return (
    <div style={{ width: "100%", height: "350px", marginTop: "20px" }}>
      <Typography variant="h6" align="center" gutterBottom>
        User Growth Over Time
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: "Months", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Number of Users", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#1976d2" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserGrowthChart;