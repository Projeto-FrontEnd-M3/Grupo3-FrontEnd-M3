import styled from "styled-components";

export const ContainerHowToUse = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0px 1rem 0px;
  justify-content: center;
  background-color: var(--color-primary-focus);
  .headTtitle {
    font-size: 1.5rem;
  }

  .containerBox {
    height: 90vh;
    width: 90vw;
    background-color: var(--color-primary);
  }
`;

export const ContainerAboutSite = styled.div`
  margin-top: 3rem;
  background-color: var(--color-primary);
  color: var(--color-grey-1);

  .ContainerAboutCenter {
    text-align: center;
  }
  @media (max-width: 800px) {
    margin-top: 1rem;
    .ContainerAboutCenter {
      text-align: center;
      font-size: 16px;
    }
  }
`;

export const ContainerAboutList = styled.ul`
  margin-top: 5rem;
  display: flex;

  .ArrowRightAltIcon {
    font-size: 4em;
  }

  @media (max-width: 800px) {
    margin-top: 1rem;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
    height: 45vh;
    .ArrowRightAltIcon {
      display: none;
    }
  }
  @media (max-width: 400px) {
    height: 30vh;
    .ArrowRightAltIcon {
      display: none;
    }
  }
`;

export const StepList = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StepListArrow = styled.li``;

export const StepListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16%;

  @media (max-width: 800px) {
    flex-direction: row;
    width: 100%;
    margin: 5px 20px 20px 5px;
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
