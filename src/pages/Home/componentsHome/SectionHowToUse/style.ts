import styled from "styled-components";

export const ContainerHowToUse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  height: auto;
  width: 100%;
  background-color: var(--color-primary-focus);
`;

export const ContainerHowToUseNav = styled.div`
  height: 1vh;
`;

export const ContainerAboutSite = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: auto;
  margin: auto;
  background-color: var(--color-primary);
  color: var(--color-grey-1);
  box-shadow: rgba(53, 87, 100, 0.5) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 2rem;
  overflow-y: auto;
  min-height: 300px;
  max-height: 450px;
  border-radius: 8px;

  p {
    text-align: justify;
  }

  .ContainerAboutCenter {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

export const ContainerAboutList = styled.ul`
  display: flex;

  .ArrowRightAltIcon {
    font-size: 4em;
  }

  @media (max-width: 800px) {
    margin-top: 1rem;
    display: block;
    .ArrowRightAltIcon {
      display: none;
    }
  }

  @media (max-width: 400px) {
    .ArrowRightAltIcon {
      display: none;
    }
  }
`;

export const StepList = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StepListArrow = styled.li`
  background-color: black;
`;

export const StepListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 16%;

  @media (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
    align-items: center;
  }
`;

export const StepListNumber = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  color: var(--color-primary-negative);
  font-size: 3em;
  font-weight: bold;
  background-color: var(--color-primary-focus);

  @media (max-width: 800px) {
    width: 50px;
    height: 50px;
    font-size: 2em;
  }
`;

export const StepListText = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: 800px) {
    text-align: left;
    margin-left: 1rem;
    font-size: 14px;
  }
`;
