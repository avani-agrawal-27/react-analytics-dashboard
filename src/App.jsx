import { Container, Typography, Grid, Paper } from "@mui/material";
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
    <Container style={{ marginTop: "40px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Analytics Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h6">User Growth</Typography>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#1976d2" />
              </LineChart>
            </ResponsiveContainer>

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;