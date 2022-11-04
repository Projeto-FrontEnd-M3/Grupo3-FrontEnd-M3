import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalLogin, FormModalLogin } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import Box from "@mui/material/Box";
import { useUserContext } from "../../../../context/UserContext";

const ModalRegisterOng = () => {
  const { setActualSectionHome } = useUserContext();
  return (
    <ContainerModal>
      <ContainerModalLogin>
        <FormModalLogin>
          <Text tag="h2" fontSize="title1" color="primary">
            ONG
          </Text>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <BusinessTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="CNPJ" variant="standard" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Nome" variant="standard" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AlternateEmailTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Email" variant="standard" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <CallTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              label="Forma de contato"
              variant="standard"
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Senha" variant="standard" />
          </Box>

          <ButtonDefault bgColor="primary" color="primary">
            CADASTRAR
          </ButtonDefault>
          <div className="horizontalBar"></div>
          <Text color="primary" fontSize="text3">
            Já tem uma conta?{" "}
            <span onClick={() => setActualSectionHome("login")}>Login</span>
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

export default ModalRegisterOng;
