import { Paper, Typography } from "@mui/material";

function StatsCard({ title, value }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h3">{value}</Typography>
    </Paper>
  );
}

export default StatsCard;