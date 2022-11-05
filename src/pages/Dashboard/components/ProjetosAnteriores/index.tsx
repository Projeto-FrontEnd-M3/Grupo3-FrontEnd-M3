import React from "react";
import {
  ContainerProject,
  ContainerProjectLi,
  ContainerProjectUl,
} from "./style";
import IconImage from "../../../../assets/IconImage.png";
import { Text } from "../../../../styles/TypograpyText";

const ProjetosAnteriores = () => {
  return (
    <ContainerProject>
      <Text fontSize="text3" color="success" className="message">
        Você já concluiu 12 projetos, as ONGs agradecem
      </Text>
      <ContainerProjectUl>
        <ContainerProjectLi>
          <div className="title">
            <Text fontSize="text2" color="grey1">
              ONG COLHEITA FELIZ
            </Text>
            <Text fontSize="text2" color="grey1">
              ENTREGUE EM: <span>10/10/2020</span>
            </Text>
          </div>
          <div className="resume">
            <figure>
              <img src={IconImage} alt="Imagem de teste" />
            </figure>
            <Text fontSize="text4" color="grey1">
              Preciso de um site que nossos doadores possam ver os eventos da
              ONG e conﬁrmar presença. E também verificar como foram gastas as
              doações durantes os eventos.
            </Text>
          </div>
        </ContainerProjectLi>
      </ContainerProjectUl>
    </ContainerProject>
  );
};

export default ProjetosAnteriores;
