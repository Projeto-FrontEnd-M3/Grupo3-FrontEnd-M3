import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  z-index: 1;
  transition: 1.5s;

  .exit{
    animation: fadeOut 0.5s;
  }

  .exitRegister{
    animation: fadeOut 0.5s;
  }
`;
