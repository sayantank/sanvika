import styled from "styled-components";

export const MainContainer = styled.div`
    min-height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;
    h1 {
        font-size: 1.6rem;
        color: #1a3008;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 24px;
    }
`

export const BenefitsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 90%;
    padding: 20px;
`

export const BenefitsBlock = styled.div`
    margin-bottom: 12px;
    padding: 18px;
    flex: 1;
    max-width: 240px;
    height: auto;
    text-align: center;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
`

export const BenefitsTitle = styled.h2`
    font-size: 1.2rem;
    color: #417f56;
    text-align: center;
`

export const BenefitsText = styled.p`
    text-align: center;
    margin-top: 12px;
    font-size: 0.9rem;
    font-weight: 400;
    color: #417F56;
    line-height: 1.3rem;
    padding: 12px;
`