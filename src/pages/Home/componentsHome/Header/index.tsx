import { HeaderStyle } from "./style";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Text } from "../../../../styles/TypograpyText";

interface Props {
  window?: () => Window;
}

const drawerWidth = "50%";
const navItems = ["EQUIPE", "COMO FUNCIONA", "LOGIN"];

export function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Text tag="h1" color="secundary">
        Nome do Site
      </Text>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <HeaderStyle>
      <AppBar component="nav" className="header">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img src="" alt="Logo" />
              <Text tag="h1" color="secundary">
                Nome do Site
              </Text>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button className="navBtn">EQUIPE</Button>
              <Text tag="span" color="primary">
                |
              </Text>
              <Button className="navBtn">COMO FUNCIONA</Button>
              <Text tag="span" color="primary">
                |
              </Text>
              <Button className="navBtn">LOGIN</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" className="navMobile">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </HeaderStyle>
  );
}
