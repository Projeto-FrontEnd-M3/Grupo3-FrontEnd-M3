import { ContainerModal } from "../../../../components/ContainerModal/style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import TitleTwoToneIcon from "@mui/icons-material/TitleTwoTone";
import Box from "@mui/material/Box";
import {
  ContainerModalLogin,
  FormModalLogin,
} from "../../../Home/componentsHome/ModalLogin/style";
import { CloseButton } from "../../../Home/componentsHome/ModalRegisterOng/style";
import { IEditDemand, useUserContext } from "../../../../context/UserContext";
import { CssTextField } from "../../../Home/componentsHome/ModalRegisterOng";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editDemandValidate } from "../../../../services/validations/validation";

const ModalEditResquest = () => {
  const { setactualModalDashboard, filteredListAux, editDemandRequest } =
    useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditDemand>({
    resolver: yupResolver(editDemandValidate),
  });

  return (
    <ContainerModal>
      <ContainerModalLogin>
        <FormModalLogin onSubmit={handleSubmit(editDemandRequest)}>
          <Text tag="h1" fontSize="title1" color="primary">
            Editar Pedido
          </Text>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TitleTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              error={!!errors.title}
              helperText={errors.title?.message}
              {...register("title")}
              id="input-with-sx"
              label="Título"
              variant="standard"
              defaultValue={filteredListAux[0]?.title}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DescriptionTwoToneIcon
              sx={{ color: "var(--color-primary)", mr: 2, my: 0.5 }}
            />
            <CssTextField
              error={!!errors.description}
              helperText={errors.description?.message}
              {...register("description")}
              id="standard-multiline-static"
              label="Descrição"
              multiline
              rows={2}
              defaultValue={filteredListAux[0]?.description}
              variant="standard"
            />
          </Box>

          <ButtonDefault bgColor="primary" color="primary">
            Editar
          </ButtonDefault>

          <CloseButton
            className="close"
            onClick={() => setactualModalDashboard("none")}
          />
        </FormModalLogin>
      </ContainerModalLogin>
    </ContainerModal>
  );
};

export default ModalEditResquest;
