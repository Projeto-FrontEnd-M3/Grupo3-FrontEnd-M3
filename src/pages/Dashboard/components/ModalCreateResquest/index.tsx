import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalEditProfile, ModalContent } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
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
import { createDemandValidate } from "../../../../services/validations/validation";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IMap {
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
  const { setactualModalDashboard, user, createDemandRequest, exit, setExit } =
    useUserContext();

  const formatDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const map: IMap = {
      mm: today.getMonth() + 1,
      dd: today.getDate(),
      aa: today.getFullYear().toString().slice(-2),
      aaaa: today.getFullYear(),
    };

    return `${map.dd}/${map.mm}/${map.aaaa}`;
  };

  const formOptions = {
    defaultValues: {
      userId: `${user.user?.id}`,
      created_at: formatDate(),
      status: "Pendente",
    },
    resolver: yupResolver(createDemandValidate),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateDemandRequest>(formOptions);

  return (
    <ContainerModal>
      <ContainerModalEditProfile className={exit ? "exit" : ""}>
        <ModalContent onSubmit={handleSubmit(createDemandRequest)}>
          <Text tag="h2" fontSize="title1" color="primary">
            CRIAR PROJETO
          </Text>

          <Box
            sx={{
              display: "flex",
              alignItems: errors.title ? "center" : "flex-end",
            }}
          >
            <TitleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              error={!!errors.title}
              helperText={errors.title?.message}
              {...register("title")}
              label="Título"
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: errors.description ? "center" : "flex-end",
            }}
          >
            <DescriptionTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              error={!!errors.description}
              helperText={errors.description?.message}
              {...register("description")}
              label="Descrição"
              multiline
              rows={2}
              defaultValue=""
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: errors.estimated_time ? "center" : "flex-end",
            }}
          >
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
                error={!!errors.estimated_time}
                helperText={errors.estimated_time?.message}
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
            CRIAR
          </ButtonDefault>

          <CloseButton
            onClick={() => {
              setExit(true);
              setTimeout(() => {
                setactualModalDashboard("none");
                setExit(false);
              }, 500);
            }}
          />
        </ModalContent>
      </ContainerModalEditProfile>
    </ContainerModal>
  );
};

export default ModalCreateResquest;
