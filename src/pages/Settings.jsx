import { Container, Typography, Switch } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../themes/ThemeContext";

function Settings() {
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Container>
      <Typography variant="h4">Settings</Typography>
      <div>
        <Typography>Dark Mode</Typography>
        <Switch onChange={toggleColorMode} />
      </div>
      <div>
        <Typography>Profile</Typography>
        <Typography>Manage your profile settings here.</Typography>
      </div>
    </Container>
  );
}

export default Settings;