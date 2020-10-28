import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #edffdd;
`

export const TextWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.6rem;
        color: #1a3008;
        margin-bottom: 28px;
    }
    p {
        text-align: center;
        color: #417f56;
        margin-bottom: 14px;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        padding-bottom: 28px;
        h1 {
            margin-top: 28px;
        }
        p {
            margin-bottom: 16px;
        }
    }
`