import styled from "styled-components";

export const ContainerDev = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  background-color: var(--color-primary);

  @media (max-width: 900px) {
    height: calc(100vh - 64px);
  }

  @media (max-width: 600px) {
    height: calc(100vh - 56px);
  }
`;
export const ContainerDevNav = styled.div`
  padding-top: 4rem;
  width: 94%;
  margin: auto;
`;

export const ContainerDevWindow = styled.div`
  margin: auto;
`;
