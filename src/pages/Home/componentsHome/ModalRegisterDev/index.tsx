import { ContainerModal } from "../../../../components/ContainerModal/style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import Box from "@mui/material/Box";
import { useUserContext } from "../../../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidateDev } from "../../../../services/validations/validation";
import { useForm } from "react-hook-form";
import { CssTextField } from "../ModalRegisterOng";
import { BackButton, CloseButton } from "../ModalRegisterOng/style";
import { ContainerModalLogin, FormModalLogin } from "../ModalLogin/style";

export interface IRegisterHookForm {
  email: string;
  password: string;
  name: string;
  type: string;
  cnpj?: string;
}

const ModalRegisterDev = () => {
  const { setActualSectionHome, registerUser, exit, setExit } =
    useUserContext();

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
      <ContainerModalLogin className={exit ? "exitRegister" : ""}>
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
          <CloseButton
            onClick={() => {
              setExit(true);
              setTimeout(() => {
                setActualSectionHome("none");
                setExit(false);
              }, 200);
            }}
          />
          <BackButton
            onClick={() => {
              setExit(true);
              setTimeout(() => {
                setActualSectionHome("register");
                setExit(false);
              }, 200);
            }}
          />
        </FormModalLogin>
      </ContainerModalLogin>
    </ContainerModal>
  );
};

export default ModalRegisterDev;
