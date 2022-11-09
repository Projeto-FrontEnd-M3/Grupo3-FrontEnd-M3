import styled from "styled-components";

export const ContainerDev = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: var(--color-primary);
  animation: fadeIn 0.5s;
`;

export const ContainerDevNav = styled.div`
  padding-top: 4rem;
  width: 94%;
  margin: auto;
`;

export const ContainerDevWindow = styled.div`
  margin: auto;
`;

export const ContainerTabs = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  background-color: var(--color-primary-negative);
  span {
    font-weight: 700;
  }
`;

export const ContainerTabsNav = styled.ul`
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;
`;

export const ContainerOutlet = styled.div`
  width: 100%;
  padding: 24px 16px;
  margin: 0 auto;
  max-width: 1536px;
  background-color: var(--color-primary);
`;
