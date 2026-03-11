import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
  
  const data = [
    { day: "Mon", visitors: 120 },
    { day: "Tue", visitors: 210 },
    { day: "Wed", visitors: 150 },
    { day: "Thu", visitors: 280 },
    { day: "Fri", visitors: 300 },
  ];
  
  function TrafficChart() {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="visitors" stroke="#1976d2" fill="#90caf9" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  
  export default TrafficChart;