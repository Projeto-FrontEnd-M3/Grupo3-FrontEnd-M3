import styled from "styled-components";

export const MainStyled = styled.div`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: row;
  height: calc(100vh - 5rem);

  .container {
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 50px;
  }

  .containerDivText {
    margin-bottom: 3rem;
  }

  .containerDivText h1 {
    margin-bottom: 2rem;
  }

  .containerDivTitle {
  }

  .containerDivBtn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
    margin-bottom: 3rem;
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

  @media (max-width: 600px) {
    .containerImg {
      display: none;
    }
  }

  @media (max-width: 820px) {
    .containerDivBtn {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
