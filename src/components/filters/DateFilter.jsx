import { Select, MenuItem } from "@mui/material";

function DateFilter({ value, onChange }) {
  return (
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      <MenuItem value="7">Last 7 Days</MenuItem>
      <MenuItem value="30">Last 30 Days</MenuItem>
      <MenuItem value="365">Last Year</MenuItem>
    </Select>
  );
}

export default DateFilter;
