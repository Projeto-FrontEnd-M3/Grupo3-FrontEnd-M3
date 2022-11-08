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
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContainerProjectLeftResume = styled.div`
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s;
`;

export const ContainerProjectLeftTitle = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: justify;
  animation: fadeIn 1s;
  @media (max-width: 750px) {
    p {
      text-align: center;
      font-size: 16px;
      margin-bottom: 2%;
    }
    flex-direction: column;
  }
`;

export const ContainerProjectLefButton = styled.div`
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
`;
export const ContainerProjecRightInfo = styled.div`
  display: flex;
  flex-direction: row;
  animation: fadeIn 1s;
`;

export const ContainerProjecRightTitle = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
  animation: fadeIn 1s;
  .titlespace {
    padding-bottom: 2rem;
  }
`;

export const ContainerProjecRightContacts = styled.div`
  padding-left: 15%;
  margin-right: auto;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s;

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
