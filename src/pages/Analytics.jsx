import { Container, Typography } from "@mui/material";
import RevenueChart from "../components/charts/RevenueChart";
import UserGrowthChart from "../components/charts/UserGrowthChart";

function Analytics() {
  return (
    <Container>
      <Typography variant="h4">Analytics</Typography>
      <UserGrowthChart />
      <RevenueChart />
    </Container>
  );
}

export default Analytics;