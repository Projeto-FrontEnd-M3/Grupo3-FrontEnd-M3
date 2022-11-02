import { Text } from "../../../../styles/TypograpyText";
import Button from "@mui/material/Button";
import { MainStyled } from "./styel";

export const MainSection = () => {
  return (
    <MainStyled>
      <div className="container">
        <div className="containerDivText">
          <Text tag="h1" color="grey3" fontSize="title1">
            Nós conectamos você
          </Text>
          <Text tag="p" color="grey3">
            O site que conecta ONGs que precisam com devs que querem desenvolver
          </Text>
        </div>
        <div className="containerDivBtn">
          <Button variant="outlined" className="btnSobre">
            SAIBA MAIS
          </Button>
          <Button variant="outlined" className="btnRegistro">
            CADASTRE-SE
          </Button>
        </div>
      </div>
      <div></div>
    </MainStyled>
  );
};
