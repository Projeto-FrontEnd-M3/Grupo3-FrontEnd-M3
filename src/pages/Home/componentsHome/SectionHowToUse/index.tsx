import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { ContainerHowToUse } from "./style";
import { Box } from "@mui/system";
import AboutSite from "./components/AboutSite";
import HowToUseDev from "./components/HowToUseDev";
import HowToUseOng from "./components/HowToUseOng";
import { Text } from "../../../../styles/TypograpyText";

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HowToUse() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContainerHowToUse>
      <Box className="containerBox">
        <Box
          sx={{
            borderColor: "divider",
            color: "var(--color-grey-1)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            textColor="inherit"
            aria-label="basic tabs example"
            centered
          >
            <Tab
              className="headTtitle"
              label="QUAL OBJETIVO DO SITE?"
              {...a11yProps(0)}
            />
            <Tab
              className="headTtitle"
              label="SOU DEV, COMO USO?"
              {...a11yProps(1)}
            />
            <Tab
              className="headTtitle"
              label="SOU ONG, COMO USO?"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AboutSite />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <HowToUseDev />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HowToUseOng />
        </TabPanel>
      </Box>
    </ContainerHowToUse>
  );
}
