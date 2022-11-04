import styled from "styled-components";

export const HistoricContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 400px;
  width: 100%;

  border-radius: 26px;
  background-color: var(--color-primary-negative);

  & > h2 {
    padding: 18px;
  }

  & > ul {
    background-color: var(--color-primary-focus);

    border-radius: 0 0 26px 26px;

    padding: 12px;
    min-height: 90%;

    display: flex;
    flex-direction: column;

    & > .historic__list--empty {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
    }
  }
`;
