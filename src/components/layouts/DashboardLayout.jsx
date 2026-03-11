import { useContext } from "react";
import { ColorModeContext } from "../../themes/ThemeContext";

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

const drawerWidth = 240;

function DashboardLayout({ children }) {
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    // Remove marginLeft and use flexbox for proper alignment
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Top bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Analytics Dashboard
          </Typography>

          <IconButton color="inherit" onClick={toggleColorMode}>
            <DarkModeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Analytics" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Reports" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
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