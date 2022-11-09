import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import AboutSite from "./components/AboutSite";
import HowToUseDev from "./components/HowToUseDev";
import HowToUseOng from "./components/HowToUseOng";
import { ContainerHowToUse, ContainerHowToUseNav, StyledPanel } from "./style";
import { Tab, TabsList } from "./styleMui";

export default function HowToUse() {
  return (
    <ContainerHowToUse>
      <ContainerHowToUseNav></ContainerHowToUseNav>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab className="optionHowToUse">Qual objetivo do site?</Tab>
          <Tab className="optionHowToUse">Sou Dev, como uso?</Tab>
          <Tab className="optionHowToUse">Sou ONG, como uso?</Tab>
        </TabsList>
        <StyledPanel value={0}>
          <AboutSite />
        </StyledPanel>
        <StyledPanel value={1}>
          <HowToUseDev />
        </StyledPanel>
        <StyledPanel value={2}>
          <HowToUseOng />
        </StyledPanel>
      </TabsUnstyled>
    </ContainerHowToUse>
  );
}
