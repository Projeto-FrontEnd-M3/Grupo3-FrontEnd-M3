import styled from "styled-components";


export const MainStyled = styled.main`
  width: 100%;
  height: calc(100vh - 68px);

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  & > .dashboard__margin--left {
    display: block;
    background-color: var(--color-primary);
    height: 100%;
    width: calc(calc(100vw - 1536px) / 2);
  }

  &  .dashboard__left {
    width: 65%;
    height: 100%;
    background-color: var(--color-primary);
    padding: 0 24px;
  }

  &  .dashboard__right {
    width: 35%;
    height: 100%;

    padding: 0 24px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 900px) {
    height: calc(100vh - 64px);
  }
`;
