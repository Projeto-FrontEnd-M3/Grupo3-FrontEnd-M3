import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { CarouselContainer, StepperStyled } from "./styles";
import { ProjetoAtualCard } from "../ProjetoAtualCard";
import { Api } from "../../../../services/api/api";
import { IDemandsResponse } from "../../../../interface/TypesGlobal";
import { ContainerProjectEmpty } from "../ProjetosAnteriores/style";
import { Text } from "../../../../styles/TypograpyText";

const ProjetosDisponiveis = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [filteredList, setFilteredList] = useState([] as IDemandsResponse[]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const listAllDemands = async () => {
      try {
        const request = await Api.get("/jobs/?_expand=user");
        const response: IDemandsResponse[] = request.data;

        const filtered = response.filter((elem) => elem.status == "Pendente");
        setFilteredList(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    listAllDemands();
  }, []);

  return (
    filteredList.length > 0 ? (
      <CarouselContainer>
        <ProjetoAtualCard obj={filteredList[activeStep]} />
        <StepperStyled
          variant="dots"
          steps={filteredList.length}
          position="static"
          activeStep={activeStep}
          sx={{
            flexGrow: 1,
            borderRadius: "20px",
            backgroundColor: "#f1f1f1",
            marginTop: "8px",
          }}
          nextButton={
            <Button
              size="small"
              sx={{
                color: "#355764",
                fontWeight: 500,
              }}
              onClick={handleNext}
              disabled={activeStep === filteredList.length - 1}
            >
              Próximo
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              sx={{
                color: "#355764",
                fontWeight: 500,
              }}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Voltar
            </Button>
          }
        />
      </CarouselContainer>
    ) : (
      <ContainerProjectEmpty>
      <Text fontSize="text3" color="success" className="message">
        Não temos nenhum projeto disponivel no momento, verifique novamente mais tarde!
      </Text>
    </ContainerProjectEmpty>
    )
  );
};

export default ProjetosDisponiveis;
