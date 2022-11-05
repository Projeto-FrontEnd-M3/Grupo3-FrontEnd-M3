import React from "react";
import { ContainerDev, ContainerDevNav, ContainerDevWindow } from "./style";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ProjetoAtual } from "./components/ProjetoAtual";
import ProjetosAnteriores from "./components/ProjetosAnteriores";
import ProjetosDisponiveis from "./components/ProjetosDisponiveis";
import { NavbarDashboard } from "../../components/NavbarDashboard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const AntTabs = styled(Tabs)({
  borderBottom: "0px solid #AAD8D3",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  height: 40,
  fontSize: 14,
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
    height: 60,
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "#eeeeee",
  fontFamily: ["Poppins"].join(","),
  "&:hover": {
    backgroundColor: "#355764",
    opacity: 0.5,
    borderRadius: "20px",
    "& $wrapper": {
      color: "#393E46",
    },
  },
  "&.Mui-selected": {
    color: "#C2FFD9",
    backgroundColor: "#355764",
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: "20px",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#eeeeee",
  },
}));

interface StyledTabProps {
  label: string;
}

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <NavbarDashboard />
      <ContainerDev>
        <div>
          <ContainerDevNav>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
              variant="fullWidth"
              centered
            >
              <AntTab label="PROJETO ATUAL" />
              <AntTab label="PROJETOS ANTERIORES" />
              <AntTab label="PROJETOS DISPONÍVEIS" />
            </AntTabs>
          </ContainerDevNav>
          <ContainerDevWindow>
            <TabPanel value={value} index={0}>
              <ProjetoAtual />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ProjetosAnteriores />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ProjetosDisponiveis />
            </TabPanel>
          </ContainerDevWindow>
        </div>
      </ContainerDev>
    </>
  );
};

export default Dashboard;
