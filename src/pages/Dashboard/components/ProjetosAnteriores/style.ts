import styled from "styled-components";
export const ContainerProject = styled.div`
  max-width: 1400px;
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 3rem;
  background-color: var(--color-primary-negative);
  span {
    font-weight: 700;
  }
  p {
    padding: 0.5rem;
  }
  .message {
    margin-right: 2rem;
    margin-top: 2rem;
  }
`;

export const ContainerProjectUl = styled.ul`
  width: 90%;
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-negative);

  figure {
    margin: auto 1%;
  }

  img {
    gap: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  span {
    font-weight: 700;
  }

  .title {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: 0.2rem var(--color-primary) solid;
    text-align: justify;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-primary);
  }
  .resume {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 0.2rem var(--color-primary-focus) solid;
    text-align: justify;
    display: flex;
    justify-content: space-between;
  }
`;

export const ContainerProjectLi = styled.li`
  padding-bottom: 1rem;
`;
