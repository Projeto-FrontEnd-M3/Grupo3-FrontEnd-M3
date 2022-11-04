import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalLogin, FormModalLogin } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import Box from "@mui/material/Box";
import { useUserContext } from "../../../../context/UserContext";

const ModalLogin = () => {
  const { actualSectionHome, setActualSectionHome } = useUserContext();

  return (
    <ContainerModal>
      <ContainerModalLogin>
        <FormModalLogin>
          <Text tag="h2" fontSize="title1" color="primary">
            LOGIN
          </Text>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Email" variant="standard" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Senha" variant="standard" />
          </Box>

          <ButtonDefault type="button" bgColor="primary" color="primary">
            ENTRAR
          </ButtonDefault>

          <div className="horizontalBar"></div>

          <Text color="primary" fontSize="text3">
            Não tem uma conta?{" "}
            <span onClick={() => setActualSectionHome("register")}>
              Cadastre-se
            </span>
          </Text>

          <button
            type="button"
            onClick={() => setActualSectionHome("none")}
            className="buttonClosed"
          >
            X
          </button>
        </FormModalLogin>
      </ContainerModalLogin>
    </ContainerModal>
  );
};

export default ModalLogin;
