import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalLogin, FormModalLogin } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import Box from "@mui/material/Box";
import { useUserContext } from "../../../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidate } from "../../../../services/validations/validation";
import { useForm } from "react-hook-form";

export interface IRegisterHookForm {
  email: string;
  password: string;
  name: string;
  type: string;
  cnpj?: string;
}

const ModalRegisterDev = () => {
  const { setActualSectionHome } = useUserContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterHookForm>({ resolver: yupResolver(registerValidate) });

  return (
    <ContainerModal>
      <ContainerModalLogin>
        <FormModalLogin>
          <Text tag="h2" fontSize="title1" color="primary">
            DEV
          </Text>

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

export default ModalRegisterDev;
