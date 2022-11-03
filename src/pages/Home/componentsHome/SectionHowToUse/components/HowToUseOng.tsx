import React from "react";
import { Text } from "../../../../../styles/TypograpyText";
import {
  ContainerAboutList,
  ContainerAboutSite,
  StepListArrow,
} from "../style";
import StepList from "./StepList";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HowToUseOng = () => {
  return (
    <ContainerAboutSite>
      <Text className="ContainerAboutCenter">
        Caso você seja uma ONG que precise dos seviços de um programador, é só
        seguir esses passos:
      </Text>
      <ContainerAboutList>
        <StepList numbers="1" texts="Faça o cadastro em nosso site" />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="2"
          texts="Preencha uma solicitação de pedido, explicando a necessidade da sua ONG"
        />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="3"
          texts="Seu pedido irá uma uma lista de solitaçãos, onde os DEVs podem vizualizar e aceitar pedidos"
        />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="4"
          texts="Quando um DEV aceitar seu pedido, ele entrará em produção. Cada ONG só pode fazer um pedido por vez"
        />
        <li>
          <ArrowRightAltIcon className="ArrowRightAltIcon" />
        </li>
        <StepList
          numbers="5"
          texts="Quando o DEV terminar a produção, seu pedido será entregue. Não esqueça de agradecer :)"
        />
      </ContainerAboutList>
    </ContainerAboutSite>
  );
};

export default HowToUseOng;
