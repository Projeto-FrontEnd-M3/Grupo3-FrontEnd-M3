import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header {
    width: 100%;
    height: 80px;
    background-color: var(--color-primary-negative);
    padding: 0 50px;
    justify-content: center;
    animation: fadeIn 1s;
  }

  .header > div > button {
    margin: 0;
  }

  .divLogo {
    display: flex;
    gap: 10px;
    animation: fadeIn 1s;
  }

  .navBtn {
    color: var(--color-grey-1);
    font-size: 18px;
    animation: fadeIn 1s;
  }

  .navMobile {
    background-color: var(--color-primary-negative);
  }

  .nameModal {
    height: 30px;
    padding: 1rem;
    animation: fadeIn 1s;
  }

  img {
    width: 50px;
    border-radius: 50%;
    animation: fadeIn 1.5s;
  }

  @media (max-width: 500px) {
    .header {
      padding: 0 18px;
    }
  }
`;
