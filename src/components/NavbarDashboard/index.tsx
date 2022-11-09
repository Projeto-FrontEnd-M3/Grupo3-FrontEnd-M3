import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export const NavbarDashboard = () => {
  const navigate = useNavigate();
  const { user, setactualModalDashboard, filteredListAux } = useUserContext();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#355764" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ height: "80px" }} disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "var(--color-grey-1)",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            DevOngUs
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", fontFamily: "poppins" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("atual");
                }}
              >
                <Typography textAlign="center">Projeto Atual</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("historico");
                }}
              >
                <Typography textAlign="center">Projetos Anteriores</Typography>
              </MenuItem>

              {user.user?.type == "dev" && (
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("projetos");
                  }}
                >
                  <Typography textAlign="center">
                    Projetos Disponíveis
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "var(--color-grey-1)",
              textDecoration: "none",
            }}
          >
            DevOngUs
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("atual");
              }}
              sx={{
                my: 2,
                color: "var(--color-grey-1)",
                display: "flex",
                fontFamily: "poppins",
                "&:hover": {
                  backgroundColor: "var(--color-primary-negative)",
                },
              }}
            >
              <Typography textAlign="center">Projeto Atual</Typography>
            </Button>

            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("historico");
              }}
              sx={{
                my: 2,
                color: "var(--color-grey-1)",
                display: "flex",
                fontFamily: "poppins",
                "&:hover": {
                  backgroundColor: "var(--color-primary-negative)",
                },
              }}
            >
              <Typography textAlign="center">Projetos Anteriores</Typography>
            </Button>

            {user.user?.type == "dev" && (
              <Button
                onClick={() => {
                  handleCloseNavMenu;
                  navigate("projetos");
                }}
                sx={{
                  my: 2,
                  color: "var(--color-grey-1)",
                  display: "flex",
                  fontFamily: "poppins",
                  "&:hover": {
                    backgroundColor: "var(--color-primary-negative)",
                  },
                }}
              >
                <Typography textAlign="center">Projetos Disponíveis</Typography>
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src={user?.user?.image}
                  sx={{ background: "#7E8894", width: "55px", height: "55px" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", fontFamily: "poppins" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  {user.user && user.user.name}
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  setactualModalDashboard("editProfile");
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ display: { xs: "flex" }, gap: 1 }}
                >
                  Editar Perfil <SettingsIcon />
                </Typography>
              </MenuItem>
              {user.user?.type == "ong" && filteredListAux.length == 0 && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    setactualModalDashboard("createDemand");
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ display: { xs: "flex" }, gap: 1 }}
                  >
                    Criar Projeto
                    <AddIcon />
                  </Typography>
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  navigate("/");
                  sessionStorage.clear();
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ display: { xs: "flex" }, gap: 1 }}
                >
                  Sair <ExitToAppIcon />
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
