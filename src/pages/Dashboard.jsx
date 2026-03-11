import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getCryptoData } from "../services/api";
import DateFilter from "../components/filters/DateFilter";

import StatsCard from "../components/cards/StatsCard";
import UserGrowthChart from "../components/charts/UserGrowthChart";
import RevenueChart from "../components/charts/RevenueChart";
import TrafficChart from "../components/charts/TrafficChart";
import CryptoPriceChart from "../components/charts/CryptoPriceChart";

function Dashboard({ title }) {
  const theme = useTheme();
  const titleColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const [range, setRange] = useState("7");
  const [coins, setCoins] = useState([]);
  const bitcoin = coins.find((coin) => coin.id === "bitcoin");
  const ethereum = coins.find((coin) => coin.id === "ethereum");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData(range);
      setCoins(data);
    };

    fetchData();
  }, [range]);

  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        paddingLeft: "16px",
      }}
    >
      <Typography variant="h4" gutterBottom style={{ color: titleColor }}>
        Analytical Dashboard
      </Typography>
      <DateFilter value={range} onChange={setRange} />
      {/* Stats cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard
            title="Bitcoin Price"
            value={bitcoin ? `$${bitcoin.current_price}` : "Loading..."}
          />
        </div>

        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard
            title="Ethereum Price"
            value={ethereum ? `$${ethereum.current_price}` : "Loading..."}
          />
        </div>

        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard
            title="BTC 24h Change"
            value={
              bitcoin
                ? `${bitcoin.price_change_percentage_24h.toFixed(2)}%`
                : "Loading..."
            }
          />
        </div>
        <div style={{ flex: "1 1 calc(25% - 20px)", boxSizing: "border-box" }}>
          <StatsCard
            title="ETH 24h Change"
            value={
              ethereum
                ? `${ethereum.price_change_percentage_24h.toFixed(2)}%`
                : "Loading..."
            }
          />
        </div>
      </div>
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
      <div style={{ width: "100%" }}>
        <CryptoPriceChart data={coins} />
      </div>
    </Container>
  );
}

export default Dashboard;
