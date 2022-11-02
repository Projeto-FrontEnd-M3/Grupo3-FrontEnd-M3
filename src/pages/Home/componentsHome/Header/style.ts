import styled from "styled-components";

export const HeaderStyle = styled.div`
  header {
    width: 100%;
    height: 12vh;
    background-color: var(--color-primary-negative);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 0 50px;
  }
  .divLogo {
    display: flex;
    gap: 10px;
  }
  button {
    color: var(--color-primary-focus);
  }
  span {
    color: var(--color-primary);
  }
`;
