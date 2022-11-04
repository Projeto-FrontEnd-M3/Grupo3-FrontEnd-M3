import styled from "styled-components";

export const MainStyled = styled.div`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: row;
  height: calc(100vh - 5rem);

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 50px 0 50px;
  }

  .containerDivText {
    margin-bottom: 4rem;
  }

  .containerDivText h1 {
    margin-bottom: 0.5rem;
  }

  .containerDivBtn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 420px;
    width: 100%;
    gap: 10px;
    margin-bottom: 3rem;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 791px) {
    height: 100vh;
  }

  @media (max-width: 800px) {
    .containerDivBtn {
      flex-wrap: wrap;
    }
  }
`;
