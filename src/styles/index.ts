import styled from "styled-components";

export const Header = styled.header`
    height: 50px;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: var(--padding-sm) var(--padding-lg);
`;

export const Main = styled.main`
    height: calc(100vh - 50px - 60px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    > .phrase {
        margin-right: var(--margin-lg);
    }

    > .phrase > p {
        max-width: 250px;
        text-align: end;
        font-size: var(--font-sm);
    }

    > .phrase > .services {
        margin-top: var(--margin-sm);
    }

    > a {
        display: flex;
        justify-content: end;
        margin-right: var(--margin-lg);
        text-decoration: none;
    }

    > a > p {
        white-space: nowrap;
    }

    > a > p,
    svg {
        font-size: 2rem;

        @media only screen and (min-width: 468px) {
            font-size: 3rem;
        }

        @media only screen and (min-width: 768px) {
            font-size: 5rem;
        }
    }
`;

export const Footer = styled.footer`
    height: 60px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 480px) {
        flex-direction: row;
        padding: var(--padding-md) var(--padding-lg);
    }

    > .instagram,
    > .email {
        font-size: var(--font-sm);
    }

    > .instagram {
        display: flex;
        align-items: center;
        font-family: var(--font-amaranth);
        font-weight: bold;
    }

    > .instagram > .icon {
        width: 20px;
        height: 20px;
        margin-right: var(--margin-sm);
    }
`;
