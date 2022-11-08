import styled from "styled-components";

export const ContainerProject = styled.div`
  max-width: 1400px;
  border-radius: 20px;
  margin: auto;
  display: flex;
  background-color: var(--color-primary-negative);
  animation: fadeIn 1s;
  span {
    font-weight: 700;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContainerProjectLeft = styled.div`
  gap: 1rem;
  margin: 3rem 4rem 3rem 2rem;
  max-width: 60%;
  animation: fadeIn 1s;

  @media (max-width: 750px) {
    margin: 3rem 0rem 3rem 0rem;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContainerProjectLeftResume = styled.div`
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s;

  .resumesize {
    max-width: 100%;
    min-height: 20vh;
    overflow: auto;
  }
`;

export const ContainerProjectLeftTitle = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: justify;
  animation: fadeIn 1s;

  @media (max-width: 900px) {

    p {
      text-align: center;
      font-size: 16px;
      margin-bottom: 2%;
    }
    flex-direction: column;
  }
`;

export const ContainerProjectLefButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  margin-top: 9rem;
  animation: fadeIn 1s;
  button {
    font-size: 1rem;
    width: 180px;
    height: 40px;
    animation: fadeIn 1s;
  }
  @media (max-width: 750px) {
    text-align: center;
    margin-top: 0rem;
    margin-bottom: 1rem;
  }
`;

export const ContainerProjectDiv = styled.div`
  width: 3px;
  margin: auto;
  height: 25vh;
  background-color: var(--color-primary);
  animation: fadeIn 1s;
  @media (max-width: 750px) {
    display: none;
  }
`;
export const ContainerProjecRight = styled.div`
  gap: 1rem;
  margin: 3rem 2rem 3rem 0rem;
  min-width: 35%;
  animation: fadeIn 1s;

  figure {
    margin: 0% 5%;
  }

  img {
    gap: 5rem;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  @media (max-width: 750px) {
    width: unset;
  }
`;
export const ContainerProjecRightInfo = styled.div`
  display: flex;
  flex-direction: row;
  animation: fadeIn 1s;
  justify-content: flex-end;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const ContainerProjecRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  animation: fadeIn 1s;
  align-items: center;
  justify-content: center;

  .titlespace {
    padding-bottom: 0.5rem;
  }
`;

export const ContainerProjecRightContacts = styled.ul`
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s;
  align-items: center;

  svg {
    color: var(--color-primary);
    margin: 1%;
  }
  li {
    display: flex;
    align-items: center;
  }
`;

export const ContainerProjecRightText = styled.div`
  max-width: 70%;
  margin: auto;
  padding-top: 3rem;
  text-align: center;
  animation: fadeIn 1s;
`;
