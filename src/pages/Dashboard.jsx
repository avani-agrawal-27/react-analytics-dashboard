import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import StatsCard from "../components/cards/StatsCard";
import UserGrowthChart from "../components/charts/UserGrowthChart";
import RevenueChart from "../components/charts/RevenueChart";
import TrafficChart from "../components/charts/TrafficChart";

function Dashboard({ title }) {
  const theme = useTheme();
  const titleColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Container maxWidth={false} sx={{ mt: 4, display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "16px" }}>
      <Typography variant="h4" gutterBottom style={{ color: titleColor }}>
        Analytical Dashboard
      </Typography>

      {/* Stats cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard title="Active Users" value="1240" />
        </div>
        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard title="Revenue" value="$24K" />
        </div>
        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard title="Transactions" value="560" />
        </div>
        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard title="Conversion Rate" value="3.4%" />
        </div>
      </div>

      {/* Chart */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 calc(50% - 20px)", boxSizing: "border-box" }}>
          <UserGrowthChart />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)", boxSizing: "border-box" }}>
          <RevenueChart />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <TrafficChart />
      </div>
    </Container>
  );
}

export default Dashboard;