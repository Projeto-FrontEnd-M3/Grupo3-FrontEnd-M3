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
import logoIcon from "../../../../assets/awesome-hand-logo-design_93835-290.webp";

interface Props {
  window?: () => Window;
}

interface INavigateRoutes {
  HOME: string;
  EQUIPE: string;
  "COMO FUNCIONA": string;
}

const drawerWidth = "50%";
const navItems = ["HOME", "EQUIPE", "COMO FUNCIONA"];

export const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { setActualSectionHome } = useUserContext();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigateRoutes: INavigateRoutes = {
    HOME: "home",
    EQUIPE: "equipe",
    "COMO FUNCIONA": "sobre",
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Text className="nameModal" fontSize="text1" tag="h1" color="primary">
        Nome do Site
      </Text>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() =>
                navigate(navigateRoutes[item as keyof INavigateRoutes])
              }
              sx={{ textAlign: "center", color: "#00ADB5" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="login" disablePadding>
          <ListItemButton
            onClick={() => setActualSectionHome("login")}
            sx={{ textAlign: "center", color: "#00ADB5" }}
          >
            <ListItemText primary="LOGIN" />
          </ListItemButton>
        </ListItem>
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
              alignItems: "center"
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
              <img src={logoIcon} alt="Logo" />
              <Text
                className="logoName"
                tag="h2"
                color="secundary"
                fontSize="title3"
              >
                Dev's Help
              </Text>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button onClick={() => navigate("home")} className="navBtn">
                HOME
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
              <Button onClick={() => navigate("equipe")} className="navBtn">
                EQUIPE
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
              minWidth: "206px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </HeaderStyle>
  );
};
