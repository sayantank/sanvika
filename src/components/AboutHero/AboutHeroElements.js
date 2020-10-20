import styled from "styled-components";

export const AboutHeroContainer = styled.div`
    height: auto;
    width: 100%;
    top: 0;
    position: relative;
    margin-top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const AboutHeroWrapper = styled.div`
    width: 80%;
    padding-top: 54px;
    z-index: 2;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
    }
`

export const HeroTitle = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;

    h1 { 
        font-size: 3.4rem;
        color: #1a3008;
        font-weight: 700;
        line-height: 3.6rem;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 36px;
        h1 {
            text-align: center;
            font-size: 2.2rem;
            line-height: 2.3rem;
        }
    }
`

export const IllustrationWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%
`