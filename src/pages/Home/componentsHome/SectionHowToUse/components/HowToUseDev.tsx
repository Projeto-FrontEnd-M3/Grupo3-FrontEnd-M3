import React from "react";
import { Text } from "../../../../../styles/TypograpyText";
import {
  ContainerAboutList,
  ContainerAboutSite,
  StepListArrow,
} from "../style";
import StepList from "./StepList";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HowToUseDev = () => {
  return (
    <ContainerAboutSite>
      <Text className="ContainerAboutCenter">
        Caso você seja um dev e queira ajudar uma ong a realizar um projeto,
        basta seguir os seguintes passos:
      </Text>
      <ContainerAboutList>
        <StepList numbers="1" texts="Faça o cadastro em nosso site" />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="2"
          texts="Verifique a lista de solitações, lá estarão todos os pedidos de ONGs em aberto"
        />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="3"
          texts="Quando encontrar um projeto no qual deseje trabalhar, clique em aceitar"
        />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="4"
          texts="Caso o pedidoseja muito complexo, você pode abrir para que mais de uma pessoa desenvolva"
        />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="5"
          texts="Depois de finalizado, você pode começar a ajudar um novo projeto, para isso basta entregar o anterior a ONG e marcar como concluído "
        />
      </ContainerAboutList>
    </ContainerAboutSite>
  );
};

export default HowToUseDev;
