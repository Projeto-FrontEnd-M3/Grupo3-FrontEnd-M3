import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import AboutSite from "./components/AboutSite";
import HowToUseDev from "./components/HowToUseDev";
import HowToUseOng from "./components/HowToUseOng";
import { ContainerHowToUse, ContainerHowToUseNav } from "./style";
import { Tab, TabPanel, TabsList } from "./styleMui";

export default function HowToUse() {
  return (
    <ContainerHowToUse>
      <ContainerHowToUseNav></ContainerHowToUseNav>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Qual objetivo do site?</Tab>
          <Tab>Sou Dev, como uso?</Tab>
          <Tab>Sou ONG, como uso?</Tab>
        </TabsList>
        <TabPanel value={0}>
          <AboutSite />
        </TabPanel>
        <TabPanel value={1}>
          <HowToUseDev />
        </TabPanel>
        <TabPanel value={2}>
          <HowToUseOng />
        </TabPanel>
      </TabsUnstyled>
    </ContainerHowToUse>
  );
}
