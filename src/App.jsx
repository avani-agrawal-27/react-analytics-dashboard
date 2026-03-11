import { Container, Typography, Paper } from "@mui/material";
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

function App() {
  return (
    <Container maxWidth={false} style={{ marginTop: "40px", padding: "20px", overflowX: "hidden" }}>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>

      <div style={{ display: "flex", gap: "20px", overflowX: "hidden" }}>
        {/* Chart Section */}
        <div style={{ flex: 2}}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">User Growth</Typography>

            <div style={{ width: "100%", height: "350px" }}>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#1976d2" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Paper>
        </div>

        {/* Stats Card */}
        <div style={{ flex: 1 }}>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="h3">1,240</Typography>
          </Paper>
        </div>
      </div>
    </Container>
  );
}

export default App;