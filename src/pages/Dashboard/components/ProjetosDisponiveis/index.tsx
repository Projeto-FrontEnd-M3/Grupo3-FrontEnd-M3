import * as React from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CarouselCard from "../CarouselCard";
import { CarouselContainer, StepperStyled } from "./styles";
import { ProjetoAtualCard } from "../ProjetoAtualCard";

const ProjetosDisponiveis = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const fakedb = [
    {
      title: "Titulo do Projeto",
      description: "Descrição do projeto",
      status: "Pendente",
      userId: "6",
      project_type: "Web | Mobile | Desktop",
      created_at: "31/10/2022",
      estimated_time: "30/11/2022",
      id: 1,
      user: {
        email: "ong@teste.com",
        password:
          "$2a$10$z8WIZWS7dw4hi3jEDUVhT.kfyvP7zFcF5Xyw9qeni/s5NrUuVJW8.",
        cnpj: "08179183000166",
        name: "Organização sem fins lucrativo",
        type: "ong",
        id: 6,
      },
    },
    {
      title: "Página Institucional",
      description:
        "Precisamos de uma pagina com uma apresentação inicial do nosso trabalho. Também precisamos de alguns botões onde tenha um redirecionamento para as nossas redes, e para uma area com uma descrição completa e informações sobre a nossa ONG",
      status: "Em Andamento",
      userId: "8",
      project_type: "Web",
      created_at: "31/10/2022",
      estimated_time: "20/12/2022",
      id: 2,
      work_in: [
        {
          email: "dev@dev.com",
          name: "Desenvolvedor",
          type: "dev",
          id: 9,
        },
      ],
      user: {
        email: "ongimaginaria@teste.com",
        password:
          "$2a$10$0SWrwgyEfonZbGofaye1quJmQRa7ZWKgs/dX7S69r4HkdNUYD9kqG",
        cnpj: "35634896347000",
        name: "ONG Imaginária",
        type: "ong",
        id: 8,
      },
    },
  ];
  const filteredArray = fakedb.filter((elem) => elem.status == "Pendente");

  return (
    <CarouselContainer>
      <ProjetoAtualCard obj={filteredArray[activeStep]} />
      <StepperStyled
        variant="dots"
        steps={filteredArray.length}
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
            disabled={activeStep === filteredArray.length - 1}
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
  );
};

export default ProjetosDisponiveis;
