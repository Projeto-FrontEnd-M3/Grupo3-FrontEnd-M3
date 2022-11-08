import styled from "styled-components";

export const MainStyled = styled.div`
  background-color: var(--color-primary);
  display: flex;
  height: calc(100vh - 80px);

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 50px;
  }

  .containerDivText {
    margin-bottom: 4rem;
  }

  .containerDivText h1 {
    margin-bottom: 2rem;
  }

  .containerDivText p {
    font-size: 1.2rem;
  }

  .containerDivBtn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
    max-width: 600px;
  }

  .containerImg {
    display: flex;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 500px) {
    .container {
      margin: 24px;
    }
  }

  @media (max-width: 660px) {
    .containerImg {
      display: none;
    }

    .containerDivText h1 {
      font-size: 26px;
    }
  }

  @media (max-width: 820px) {
    .containerDivBtn {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
