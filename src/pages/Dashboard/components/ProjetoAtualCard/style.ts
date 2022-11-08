import styled from "styled-components";

export const ContainerProject = styled.div`
  max-width: 1400px;
  border-radius: 20px;
  margin: auto;
  display: flex;
  background-color: var(--color-primary-negative);
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
  @media (max-width: 750px) {
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContainerProjectLeftResume = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerProjectLeftTitle = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: justify;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  margin-top: 9rem;
  button {
    font-size: 1rem;
    width: 180px;
    height: 40px;
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
  @media (max-width: 750px) {
    display: none;
  }
`;
export const ContainerProjecRight = styled.div`
  gap: 1rem;
  margin: 3rem 2rem 3rem 0rem;
  min-width: 35%;

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
`;

export const ContainerProjecRightTitle = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
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
`;
