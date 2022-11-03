import { Text } from "../../../../styles/TypograpyText";
import Button from "@mui/material/Button";
import { MainStyled } from "./styel";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import img1 from "../../../../assets/imagem1.png";

export const MainSection = () => {
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
            className="btnAbout"
            bgColor="primary"
            color="negative"
          >
            SAIBA MAIS
          </ButtonDefault>
          <ButtonDefault
            className="btnRegister"
            bgColor="primary"
            color="negative"
          >
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
