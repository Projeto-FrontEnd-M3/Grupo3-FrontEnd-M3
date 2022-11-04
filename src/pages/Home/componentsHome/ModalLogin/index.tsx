import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalLogin, FormModalLogin } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import Box from "@mui/material/Box";
import { useUserContext } from "../../../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidate } from "../../../../services/validations/validation";

export interface ILoginHookForm {
  email: string;
  password: string;
}

const ModalLogin = () => {
  const { loginUser, actualSectionHome, setActualSectionHome } =
    useUserContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginHookForm>({ resolver: yupResolver(loginValidate) });

  return (
    <ContainerModal>
      <ContainerModalLogin>
        <FormModalLogin onSubmit={handleSubmit(loginUser)}>
          <Text tag="h2" fontSize="title1" color="primary">
            LOGIN
          </Text>

          <Box
            sx={{
              display: "flex",
              alignItems: errors.email ? "center" : "flex-end",
            }}
          >
            <AccountCircleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField
              error={!!errors.email}
              {...register("email")}
              id="input-with-sx"
              label="Email"
              variant="standard"
              helperText={errors.email?.message}
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
            <TextField
              error={!!errors.password}
              {...register("password")}
              id="input-with-sx"
              label="Senha"
              variant="standard"
              helperText={errors.password?.message}
            />
          </Box>

          <ButtonDefault type="submit" bgColor="primary" color="primary">
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
