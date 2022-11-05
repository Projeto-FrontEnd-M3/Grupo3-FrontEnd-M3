import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalEditProfile, ModalContent } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import TextField from "@mui/material/TextField";
import DevicesTwoToneIcon from "@mui/icons-material/DevicesTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import TitleTwoToneIcon from "@mui/icons-material/TitleTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";

const ModalCreateResquest = () => {
  return (
    <ContainerModal>
      <ContainerModalEditProfile>
        <ModalContent>
          <Text tag="h1" fontSize="title1" color="primary">
            Criar Pedido
          </Text>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TitleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField id="input-with-sx" label="Título" variant="standard" />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
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
            <CalendarMonthTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              label="Data de entrega"
              variant="standard"
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DevicesTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <FormControl
              variant="standard"
              sx={{ mr: 1, my: 0.5, minWidth: 175 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Tipo do projeto
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value=""
                label="Tipo de projeto"
              >
                <MenuItem value="Web">Web</MenuItem>
                <MenuItem value="Mobile">Mobile </MenuItem>
                <MenuItem value="Desktop">Desktop</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <ButtonDefault bgColor="primary" color="primary">
            Criar
          </ButtonDefault>

          <button className="buttonClosed">X</button>
        </ModalContent>
      </ContainerModalEditProfile>
    </ContainerModal>
  );
};

export default ModalCreateResquest;
