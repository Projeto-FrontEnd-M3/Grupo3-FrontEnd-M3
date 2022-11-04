import { StepListContainer, StepListNumber, StepListText } from "../style";

interface iStepList {
  texts: string;
  numbers: string;
}

const StepList = ({ numbers, texts }: iStepList) => {
  return (
    <StepListContainer>
      <StepListNumber>{numbers}</StepListNumber>

      <StepListText>{texts}</StepListText>
    </StepListContainer>
  );
};

export default StepList;
