import { Text } from "../../../../styles/TypograpyText";
import { MainStyled } from "./style";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useUserContext } from "../../../../context/UserContext";
import img1 from "../../../../assets/imagem1.png";
import ModalLogin from "../ModalLogin";
import ModalRegister from "../ModalRegister";
import { SectionEquipe } from "../SectionEquipe";

export const MainSection = () => {
  const { actualSectionHome, setActualSectionHome } = useUserContext();
  console.log(actualSectionHome);

  return (
    <MainStyled>
      {actualSectionHome !== "squad" && (
        <>
          <div className="container">
            <div className="containerDivText">
              <Text tag="h1" color="grey3" fontSize="title1">
                Nós conectamos você!
              </Text>
              <Text tag="p" color="grey3">
                O site que conecta ONGs que precisam com devs que querem
                desenvolver
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
                onClick={() => setActualSectionHome("register")}
              >
                CADASTRE-SE
              </ButtonDefault>
            </div>
          </div>
          <div className="containerImg">
            <img src={img1} alt="img de canto" />
          </div>
        </>
      )}
      {actualSectionHome == "squad" && <SectionEquipe />}
      {actualSectionHome == "login" && <ModalLogin />}
      {actualSectionHome == "register" && <ModalRegister />}
    </MainStyled>
  );
};
