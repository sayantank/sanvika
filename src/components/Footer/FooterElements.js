import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    min-height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1a3008;
`

export const FooterWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 54px;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 60%;
    }
`

export const FooterBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    h1 {
        color: #fff;
        font-size: 1.8rem;
        margin-bottom: 12px;
    }

    h2 {
        color: #ECFFDD;
        margin-bottom: 8px;
        font-size: 1rem;
        font-weight: 400;

        a {
            text-decoration: none;
            color: #ECFFDD;
        }
    }

    h3 {
        color: #ECFFDD;
        margin-top: -10px;
        font-size: 0.8rem;
        font-weight: 300;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-bottom: 36px;
    }
`

export const CopyrightWrapper = styled.p`
    text-align: center;
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: 0.7rem;
    color: #ecffdd;
    font-weight: 300;
`