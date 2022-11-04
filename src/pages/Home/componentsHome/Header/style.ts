import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header {
    width: 100%;
    height: 5rem;
    background-color: var(--color-primary-negative);
    padding: 0 50px;
    justify-content: center;
  }

  .header > div > button {
    margin: 0;
  }

  .divLogo {
    display: flex;
    gap: 10px;
  }

  .navBtn {
    color: var(--color-primary-focus);
    font-size: 18px;
  }

  .navMobile {
    background-color: var(--color-primary-negative);
  }

  .nameModal {
    height: 30px;
    padding: 1rem;
  }

  img {
    width: 50px;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    .header {
      padding: 0 18px
    }
  }
`;
