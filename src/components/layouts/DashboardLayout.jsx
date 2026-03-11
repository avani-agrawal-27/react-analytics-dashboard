import { useContext, useState } from "react";
import { ColorModeContext } from "../../themes/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import ReportIcon from "@mui/icons-material/Report";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Analytics", icon: <InsightsIcon />, path: "/analytics" },
  { text: "Reports", icon: <ReportIcon />, path: "/reports" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

function DashboardLayout({ children }) {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const iconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const [open, setOpen] = useState(true);
  const drawerWidth = open ? 240 : 80;
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  return (
    // Remove marginLeft and use flexbox for proper alignment
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Top bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2 }} onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Analytics Dashboard
          </Typography>

          <IconButton color="inherit" onClick={toggleColorMode}>
            <DarkModeIcon />
          </IconButton>

          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          transition: "width 0.3s",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.path}
              sx={{
                justifyContent: open ? "initial" : "center",
                backgroundColor: location.pathname === item.path ? "rgba(0, 0, 0, 0.1)" : "inherit",
              }}
            >
              <item.icon.type sx={{ color: iconColor }} />
              {open && <ListItemText primary={item.text} sx={{ marginLeft: 2, color: iconColor }} />}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Page content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: (theme) => theme.palette.background.default,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;