import { Text } from "../../../../styles/TypograpyText";
import { MainStyled } from "./style";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../context/UserContext";
import img1 from "../../../../assets/imagem1.png";

export const MainSection = () => {
  const navigate = useNavigate();
  const { setActualSectionHome } = useUserContext();

  return (
    <MainStyled className="animate__animated animate__fadeIn">
      <div className="container">
        <div className="containerDivText">
          <Text tag="h1" color="grey3" fontSize="title1">
            Nós conectamos você!
          </Text>
          <Text tag="p" color="grey3">
            Nós somos estudantes de desenvolvimento full stack. Criamos essa
            plataforma porque percebemos que muitas ong's atualmente não tem
            sites ou aplicações que possam auxiliar na divulgação e/ou
            arrecadação de doações, e a falta de um meio que ligue
            desenvolvedores a essas ong's nos motivou a criar essa plataforma,
            que interliga esses dois mundos. Esse é um site de trabalho
            voluntário com o objetivo de ajudar essas instituições.
          </Text>
        </div>
        <div className="containerDivBtn">
          <ButtonDefault
            onClick={() => navigate("/sobre")}
            bgColor="grey3"
            color="grey3"
          >
            SAIBA MAIS
          </ButtonDefault>
          <ButtonDefault
            onClick={() => setActualSectionHome("register")}
            bgColor="white"
            color="white"
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
