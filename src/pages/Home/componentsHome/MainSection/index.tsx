import { Text } from "../../../../styles/TypograpyText";
import { MainStyled } from "./style";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useNavigate } from "react-router-dom";
import img1 from "../../../../assets/imagem1.png";

export const MainSection = () => {
  const navigate = useNavigate();

  return (
    <MainStyled>
      <div className="container">
        <div className="containerDivText">
          <Text tag="h1" color="grey3" fontSize="title1">
            Nós conectamos você!
          </Text>
          <Text tag="p" color="grey3">
            O site que conecta ONGs que precisam com devs que querem desenvolver
          </Text>
        </div>
        <div className="containerDivBtn">
          <ButtonDefault
            onClick={() => navigate("/sobre")}
            bgColor="negative"
            color="negative"
          >
            SAIBA MAIS
          </ButtonDefault>
          <ButtonDefault bgColor="white" color="white">
            CADASTRE-SE
          </ButtonDefault>
        </div>
      </div>
      <div className="containerImg">
        <img src={img1} alt="img de canto" />
      </div>
    </MainStyled>
  );
};
