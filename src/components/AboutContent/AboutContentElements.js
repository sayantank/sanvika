import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    h1 {
        font-size: 1.6rem;
        color: #1a3008;
        font-weight: 700;
        margin-bottom: 36px;
    }
    
`

export const ContentWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: ${props => props.right ? "row" : "row-reverse"};
    align-items: center;
    margin-bottom: 48px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 95%;
    }
`

export const ImageWrapper = styled.div`
    flex: 1;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
    }

    @media screen
    and (min-width: 768px)
    and (max-width: 1024px) {
        width: 70%;
        margin-bottom: 16px;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    width: 85%;
    p {
        font-size: 1.2rem;
        color: #407953;
        font-weight: 500;
        text-align: ${props => props.right ? "left" : "right"};
    }

    @media screen and (max-width: 768px) {
        p {
            text-align: center;
            margin-top: 24px;
            font-size: 1rem;
        }
    }
`