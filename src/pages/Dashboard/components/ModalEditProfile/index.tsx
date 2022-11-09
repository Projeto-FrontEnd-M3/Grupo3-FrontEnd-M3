import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalEditProfile, ModalContent } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import CameraAltTwoToneIcon from "@mui/icons-material/CameraAltTwoTone";
import Box from "@mui/material/Box";
import { CloseButton } from "../../../Home/componentsHome/ModalRegisterOng/style";
import { useUserContext } from "../../../../context/UserContext";
import { CssTextField } from "../../../Home/componentsHome/ModalRegisterOng";
import { useForm } from "react-hook-form";

export interface IEditProfile {
  email?: string;
  password?: string;
  bio?: string;
  image?: string;
  phone?: string;
}

const ModalEditProfile = () => {
  const { setactualModalDashboard, user, editProfileRequest } =
    useUserContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IEditProfile>();

  return (
    <ContainerModal>
      <ContainerModalEditProfile>
        <ModalContent onSubmit={handleSubmit(editProfileRequest)}>
          <Text tag="h1" fontSize="title1" color="primary">
            Editar perfil
          </Text>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AlternateEmailTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              {...register("email")}
              disabled
              label="Email"
              variant="standard"
              defaultValue={user?.user.email}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              {...register("password")}
              label="Senha"
              variant="standard"
              type={"password"}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SettingsCellIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              {...register("phone")}
              label="Contato (Email ou Whatsapp)"
              variant="standard"
              defaultValue={user?.user.phone}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DescriptionTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              {...register("bio")}
              label="Descrição"
              variant="standard"
              defaultValue={user?.user.bio}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <CameraAltTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              {...register("image")}
              label="Imagem de Perfil(URL)"
              variant="standard"
              defaultValue={user?.user.image}
            />
          </Box>

          <ButtonDefault bgColor="primary" color="primary">
            Editar
          </ButtonDefault>

          <CloseButton onClick={() => setactualModalDashboard("none")} />
        </ModalContent>
      </ContainerModalEditProfile>
    </ContainerModal>
  );
};

export default ModalEditProfile;
