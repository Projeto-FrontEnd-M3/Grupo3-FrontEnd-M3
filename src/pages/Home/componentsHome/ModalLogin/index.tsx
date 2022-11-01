import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalLogin, FormModalLogin } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import Box from "@mui/material/Box";

const ModalLogin = () => {
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
            <LockTwoToneIcon sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }} />
            <TextField id="input-with-sx" label="Senha" variant="standard" />
          </Box>

          <ButtonDefault bgColor="primary" color="primary">
            ENTRAR
          </ButtonDefault>

          <div className="horizontalBar"></div>

          <Text color="primary" fontSize="text3">
            Não tem uma conta? <span>Cadastre-se</span>
          </Text>

          <button className="buttonClosed">X</button>
        </FormModalLogin>
      </ContainerModalLogin>
    </ContainerModal>
  );
};

export default ModalLogin;
