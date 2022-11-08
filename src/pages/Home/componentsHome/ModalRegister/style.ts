import styled, { css } from "styled-components";

interface ISelector {
  selector?: string;
}

export const ContainerModalRegister = styled.div`
  max-width: 380px;
  width: 100%;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--color-grey-1);
  position: relative;
  animation: fadeInDown 1.5s;
`;

export const AlignModalRegister = styled.div`
  padding: 1rem 0;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  h2 {
    letter-spacing: 0.8rem;
    margin-right: calc(1rem * -1);
  }

  span {
    color: var(--color-grey-3);
    text-decoration: underline;
    cursor: pointer;
  }

  .horizontalBar {
    width: 140%;
    height: 2px;
    background-color: var(--color-primary);
  }

  .buttonClosed {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 18px;
    color: var(--color-grey-2);
  }
`;

export const OngOrDevBox = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    border: 1px solid transparent;
    box-shadow: 0px 10px 40px -15px var(--color-primary);
    width: 50%;
    height: 10rem;
    border-radius: 3px;
    cursor: pointer;
    opacity: 25%;
    transition: 0.5s;
  }

  ${({ selector }: ISelector) => {
    switch (selector) {
      case "registerOng":
        return css`
          & :nth-child(1) {
            opacity: 100%;
          }
        `;

      case "registerDev":
        return css`
          & :nth-child(2) {
            opacity: 100%;
          }
        `;
    }
  }}
`;
