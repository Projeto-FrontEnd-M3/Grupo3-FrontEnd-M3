import React from "react";
import { Text } from "../../../../../styles/TypograpyText";
import { ContainerAboutSite } from "../style";

const AboutSite = () => {
  return (
    <ContainerAboutSite>
      <Text>
        No brasil e no mundo, existem diversas instituições de caridades que tem
        inúmeras necessidades financeiras, e as vezes não pode bancar o
        desenvolvimento de um website por exemplo. A ideia seria criar uma
        plataforma que pudesse conectar Desenvolvedores de software, com essas
        instituições de caridade, Podendo somar com todos, tanto pra um dev
        júnior que talvez queira algo de impacto no seu portfólio, tanto como o
        dev sênior que estivesse afim de ajudar.
      </Text>
      <br />
      <Text>
        A ideia da plataforma, seria juntar esses dois lados de forma
        profissional pra que um time de devs trabalhassem em conjunto pra isso!
        e seria o papel da plataforma, viabilizar isso.
      </Text>
    </ContainerAboutSite>
  );
};

export default AboutSite;
