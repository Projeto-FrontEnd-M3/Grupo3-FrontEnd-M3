import { ContainerModal } from "../../../components/ContainerModal/style";
import { ContainerModalEditProfile, ModalContent } from "./style";
import { Text } from "../../../styles/TypograpyText";
import { ButtonDefault } from "../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import Box from "@mui/material/Box";

const ModalEditProfile = () => {
  return (
    <ContainerModal>
      <ContainerModalEditProfile>
        <ModalContent>
          <Text tag="h1" fontSize="title1" color="primary">
            Editar perfil
          </Text>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AlternateEmailTwoToneIcon
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

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Nome" variant="standard" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DescriptionTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField
              id="standard-multiline-static"
              label="Descrição"
              multiline
              rows={2}
              defaultValue=""
              variant="standard"
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <CameraAltTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Imagem(URL)" variant="standard" />
          </Box>

          <ButtonDefault bgColor="primary" color="primary">
            Editar
          </ButtonDefault>

          <button className="buttonClosed">X</button>
        </ModalContent>
      </ContainerModalEditProfile>
    </ContainerModal>
  );
};

export default ModalEditProfile;
