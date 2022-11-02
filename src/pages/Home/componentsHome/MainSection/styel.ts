import styled from "styled-components";

export const MainStyled = styled.div`
  width: 100vw;
  height: 88vh;

  background-color: var(--color-primary);
  .container {
    height: 88vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 50px 0 50px;
  }
  .containerDivText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 50px;
  }
  .containerDivBtn {
    display: flex;
    gap: 15px;
  }

  .btnRegistro {
    color: white;
  }
`;
