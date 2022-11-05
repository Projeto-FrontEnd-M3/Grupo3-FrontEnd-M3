import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AboutSite from "./components/AboutSite";
import HowToUseDev from "./components/HowToUseDev";
import HowToUseOng from "./components/HowToUseOng";
import { ContainerHowToUse, ContainerHowToUseNav } from "./style";

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
  [theme.breakpoints.down("sm")]: {
    marginRight: theme.spacing(0),
  },
  color: " #00ADB5",
  fontFamily: ["Poppins"].join(","),
  "&:hover": {
    backgroundColor: "#C2FFD9",
    opacity: 0.5,
    borderRadius: "20px",
    "& $wrapper": {
      color: "#355764",
    },
  },
  "&.Mui-selected": {
    color: "#C2FFD9",
    backgroundColor: "#00ADB5",
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: "20px",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#C2FFD9",
  },
}));

interface StyledTabProps {
  label: string;
}

export default function HowToUse() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContainerHowToUse>
      <div>
        <ContainerHowToUseNav>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
            variant="fullWidth"
            centered
          >
            <AntTab label="Qual Objetivo do site?" />
            <AntTab label="Sou DEV, como uso?" />
            <AntTab label="Sou ONG, como uso?" />
          </AntTabs>
        </ContainerHowToUseNav>
        <div>
          <TabPanel value={value} index={0}>
            <AboutSite />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <HowToUseDev />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <HowToUseOng />
          </TabPanel>
        </div>
      </div>
    </ContainerHowToUse>
  );
}
