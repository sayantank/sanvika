import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    min-height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        min-height: 240px;
    }
`

export const TextWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 3.4rem;
        color: #1a3008;
        text-align: center;
    }

    h2 {
        font-size: 1.5rem;
        color: #1a3008;
        text-align: center;
        font-weight: 400;
        margin-top: -0.8rem;
    }

    @media screen 
    and (max-width: 1024px)
    and (min-width: 768px) {
        h1 {
            font-size: 2.8rem;
        }
        h2 {
            font-size: 1.2rem;
            margin-top: -0.6rem;
        }
    }

    @media screen and (max-width: 768px) {
        width: 85%;
        h1 {
            font-size: 2.4rem;
            line-height: 3rem;
        }
        h2 {
            font-size: 1rem;
            margin-top: 0.3rem;
        }
    }
`