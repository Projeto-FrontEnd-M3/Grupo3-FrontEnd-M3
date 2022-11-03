import styled from "styled-components";

export const MainStyled = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: row;

  .container {
    max-height: 100%;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 50px 0 50px;
  }

  .containerDivText {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 50px;
  }

  .containerDivBtn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 50px;
  }

  .btnAbout {
    min-width: 200px;
    border: 2px solid var(--color-primary-negative);
    padding: 0 15px 0 15px;
  }

  .btnRegister {
    min-width: 200px;
    border: 2px solid white;
    color: white;
  }

  .containerImg {
    width: 30vw;
    height: 100vh;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 690px) {
    .containerDivBtn {
      flex-wrap: wrap;
    }
  }
`;
