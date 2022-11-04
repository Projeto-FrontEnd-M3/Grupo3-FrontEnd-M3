import { ContainerModal } from "../../../../components/ContainerModal/style";
import {
  ContainerModalRegister,
  AlignModalRegister,
  OngOrDevBox,
} from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import AccessibilityNewTwoToneIcon from "@mui/icons-material/AccessibilityNewTwoTone";
import ComputerTwoToneIcon from "@mui/icons-material/ComputerTwoTone";
import { useUserContext } from "../../../../context/UserContext";

const ModalRegister = () => {
  const { setActualSectionHome } = useUserContext();
  return (
    <ContainerModal>
      <ContainerModalRegister>
        <AlignModalRegister>
          <Text tag="h2" fontSize="title1" color="primary">
            CADASTRO
          </Text>
          <Text color="primary">Comece nos informando quem você é:</Text>
          <OngOrDevBox>
            <figure>
              <AccessibilityNewTwoToneIcon
                sx={{ color: "var(--color-primary)" }}
              />
              <Text tag="h3" fontSize="title3" color="primary">
                ONG
              </Text>
            </figure>

            <figure>
              <ComputerTwoToneIcon sx={{ color: "var(--color-primary)" }} />
              <Text tag="h3" fontSize="title3" color="primary">
                DEV
              </Text>
            </figure>
          </OngOrDevBox>

          <ButtonDefault bgColor="primary" color="primary">
            CONTINUAR {">"}
          </ButtonDefault>

          <div className="horizontalBar"></div>

          <Text color="primary" fontSize="text3">
            Já tem uma conta? <span onClick={() => setActualSectionHome("login")}>Login</span>
          </Text>

          <button
            type="button"
            onClick={() => setActualSectionHome("none")}
            className="buttonClosed"
          >
            X
          </button>
        </AlignModalRegister>
      </ContainerModalRegister>
    </ContainerModal>
  );
};

export default ModalRegister;
