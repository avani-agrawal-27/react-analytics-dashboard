import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: 500 },
    { name: "Apr", users: 700 },
    { name: "May", users: 600 },
  ];
  
  function UserGrowthChart() {
    return (
      <div style={{ width: "100%", height: "350px", backgroundColor: "#f0f0f0" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#1976d2" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        {/* <p style={{ textAlign: "center", marginTop: "10px" }}>If you see this message, the chart is being rendered.</p> */}
      </div>
    );
  }
  
  export default UserGrowthChart;