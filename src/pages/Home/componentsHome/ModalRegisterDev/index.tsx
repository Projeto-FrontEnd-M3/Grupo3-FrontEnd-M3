import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalLogin, FormModalLogin } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import Box from "@mui/material/Box";
import { useUserContext } from "../../../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidateDev } from "../../../../services/validations/validation";
import { useForm } from "react-hook-form";
import { CssTextField } from "../ModalRegisterOng";

export interface IRegisterHookForm {
  email: string;
  password: string;
  name: string;
  type: string;
  cnpj?: string;
}

const ModalRegisterDev = () => {
  const { setActualSectionHome, registerUser } = useUserContext();

  const formOptions = {
    defaultValues: { type: "dev" },
    resolver: yupResolver(registerValidateDev),
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterHookForm>(formOptions);

  return (
    <ContainerModal>
      <ContainerModalLogin>
        <FormModalLogin onSubmit={handleSubmit(registerUser)}>
          <Text tag="h2" fontSize="title1" color="primary">
            DEV
          </Text>

          <Box
            sx={{
              display: "flex",
              alignItems: errors.name ? "center" : "flex-end",
            }}
          >
            <AccountCircleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              error={!!errors.name}
              {...register("name")}
              helperText={errors.name?.message}
              id="input-with-sx"
              label="Nome"
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: errors.email ? "center" : "flex-end",
            }}
          >
            <AlternateEmailTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              error={!!errors.email}
              {...register("email")}
              helperText={errors.email?.message}
              id="input-with-sx"
              label="Email"
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: errors.password ? "center" : "flex-end",
            }}
          >
            <LockTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              error={!!errors.password}
              {...register("password")}
              helperText={errors.password?.message}
              id="input-with-sx"
              label="Senha"
              variant="standard"
              type={"password"}
            />
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
