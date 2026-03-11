import React from "react";
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

function CryptoPriceChart({ data }) {
  return (
    <div style={{ width: "100%", height: "350px", backgroundColor: "#f0f0f0", marginTop: "20px" }}>
      <Typography variant="h6" align="center" gutterBottom>
        Cryptocurrency Price Trends
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: "Date", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Price in USD ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1976d2" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CryptoPriceChart;