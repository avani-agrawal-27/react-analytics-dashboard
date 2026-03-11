import { Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const rows = [
  { id: 1, col1: "Row 1", col2: "Value 1" },
  { id: 2, col1: "Row 2", col2: "Value 2" },
];

const columns = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

function Reports() {
  const handleExport = () => {
    console.log("Exporting data...");
  };

  return (
    <Container>
      <Typography variant="h4">Reports</Typography>
      <DataGrid rows={rows} columns={columns} autoHeight />
      <Button onClick={handleExport} variant="contained" color="primary">
        Export
      </Button>
    </Container>
  );
}

export default Reports;