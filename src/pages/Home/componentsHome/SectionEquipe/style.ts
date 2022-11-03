import styled from "styled-components"

export const ContainerEquipe = styled.div`

    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    svg {
        color: var(--color-primary);
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
        justify-content: space-between;

        .left__div {
            & :nth-child(1) {
                margin-bottom: 10px;
            }
        }
    }
`