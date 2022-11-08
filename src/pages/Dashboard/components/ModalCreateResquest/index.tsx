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
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useUserContext } from "../../../../context/UserContext";
import { CloseButton } from "../../../Home/componentsHome/ModalRegisterOng/style";
import { CssTextField } from "../../../Home/componentsHome/ModalRegisterOng";
import { useForm } from "react-hook-form";

interface IMap {
  dd: number;
  mm: number;
  aa: string;
  aaaa: number;
}

export interface ICreateDemandRequest {
  title: string;
  description: string;
  status: string;
  userId: string;
  project_type: string;
  created_at: string;
  estimated_time: string;
}

const ModalCreateResquest = () => {
  const { setactualModalDashboard, user, createDemandRequest } =
    useUserContext();

  function formatDate() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const map: IMap = {
      mm: today.getMonth() + 1,
      dd: today.getDate(),
      aa: today.getFullYear().toString().slice(-2),
      aaaa: today.getFullYear(),
    };

    return `${map.dd}/${map.mm}/${map.aaaa}`;
  }

  const formOptions = {
    defaultValues: {
      userId: `${user.user?.id}`,
      created_at: formatDate(),
      status: "Pendente",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateDemandRequest>(formOptions);

  return (
    <ContainerModal>
      <ContainerModalEditProfile>
        <ModalContent onSubmit={handleSubmit(createDemandRequest)}>
          <Text tag="h1" fontSize="title1" color="primary">
            Criar Pedido
          </Text>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TitleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              {...register("title")}
              label="Título"
              variant="standard"
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DescriptionTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              {...register("description")}
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

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <InputLabel>Data de entrega</InputLabel>
              <CssTextField
                className="inputDate"
                {...register("estimated_time")}
                type="date"
                variant="standard"
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DevicesTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <FormControl
              variant="standard"
              sx={{ mr: 1, my: 0.5, minWidth: 175 }}
            >
              <InputLabel>Tipo do projeto</InputLabel>
              <Select
                {...register("project_type")}
                defaultValue="Web"
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

          <CloseButton onClick={() => setactualModalDashboard("none")} />
        </ModalContent>
      </ContainerModalEditProfile>
    </ContainerModal>
  );
};

export default ModalCreateResquest;
