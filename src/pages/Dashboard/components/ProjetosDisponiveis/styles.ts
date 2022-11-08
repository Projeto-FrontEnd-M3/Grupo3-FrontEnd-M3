import styled from "styled-components";
import MobileStepper from "@mui/material/MobileStepper";

export const CarouselContainer = styled.div`
  background-color: var(--color-primary-negative);
  border-radius: 20px;
  padding: 20px;
  max-width: 100%;
  animation: fadeIn 1s;
`;

export const StepperStyled = styled(MobileStepper)`
  & .MuiMobileStepper-dotActive {
    background-color: var(--color-primary);
  }

  @media (max-width: 380px) {
    & .MuiMobileStepper-dots {
      display: none;
    }
  }
`;
