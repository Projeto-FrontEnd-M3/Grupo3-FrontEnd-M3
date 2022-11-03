import styled from "styled-components";

export const ContainerEquipe = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerSquadIntern = styled.div`
  padding: 5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 5rem;

  svg {
    color: var(--color-primary-negative);

    :hover {
      transform: scale(1.15);
    }
  }

  h1 {
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    max-width: 960px;
    margin: auto;
  }

  ul > li {
    max-width: 340px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;

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
