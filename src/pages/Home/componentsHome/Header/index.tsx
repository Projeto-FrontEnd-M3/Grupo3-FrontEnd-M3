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
import Button from "@mui/material/Button";
import { Text } from "../../../../styles/TypograpyText";
import { useUserContext } from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = "50%";
const navItems = ["HOME", "EQUIPE", "COMO FUNCIONA", "LOGIN"];

export const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { setActualSectionHome } = useUserContext();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Text className="nameModal" tag="h1" color="secundary">
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
      <AppBar position="static" component="nav" className="header">
        <Toolbar>
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
              <Text
                className="logoName"
                tag="h2"
                color="secundary"
                fontSize="title3"
              >
                Nome do Site
              </Text>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button onClick={() => navigate("home")} className="navBtn">
                HOME
              </Button>
              <Text tag="span" color="primary">
                |
              </Text>
              <Button onClick={() => navigate("equipe")} className="navBtn">
                EQUIPE
              </Button>
              <Text tag="span" color="primary">
                |
              </Text>
              <Button onClick={() => navigate("sobre")} className="navBtn">
                COMO FUNCIONA
              </Button>
              <Text tag="span" color="primary">
                |
              </Text>
              <Button
                onClick={() => setActualSectionHome("login")}
                className="navBtn"
              >
                LOGIN
              </Button>
            </Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
            display: { xs: "block", md: "none" },
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
};
