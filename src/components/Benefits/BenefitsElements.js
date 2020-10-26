import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 54px;
    padding-top: 36px;
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
    align-content: center;
    width: 80%;
    margin-top: 32px;
`

export const BenefitsBlock = styled.div`
    margin-bottom: 24px;
    padding: 24px 18px;
    flex: 1;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BenefitsText = styled.div`
    text-align: center;
    margin-top: 12px;
    p {
        font-size: 1rem;
        font-weight: 600;
        color: #417F56;
        line-height: 1.3rem;
    }
`