import styled from "styled-components";

export const ContainerModalEditProfile = styled.div`
  max-width: 380px;
  width: 100%;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--color-grey-1);
  position: relative;
  animation: fadeIn 0.5s;
`;

export const ModalContent = styled.form`
  padding: 1rem 0;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  input {
    width: 175px;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  span {
    color: var(--color-grey-3);
    text-decoration: underline;
    cursor: pointer;
  }

  .buttonClosed {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 18px;
    color: var(--color-grey-2);
  }
`;
