import styled from "styled-components";

export const ContainerEquipe = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerSquadIntern = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: calc(100vh - 80px);
  padding: 2rem 0;

  svg {
    color: var(--color-primary-negative);

    :hover {
      transform: scale(1.15);
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    max-width: 960px;
    margin: auto;
    padding: 1rem;
  }

  ul > li {
    max-width: 340px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;

    .left__div {
      & :nth-child(1) {
        margin-bottom: 10px;
      }
    }

    .right__div {
      display: flex;
      gap: 0.3rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
