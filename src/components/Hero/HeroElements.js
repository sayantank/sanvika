import styled from "styled-components";

export const HeroContainer = styled.div`
    height: 100vh;
    width: 100%;
    top: 0;
    position: relative;
    margin-top: -60px;
    display: flex;
`

export const Background = styled.div`
    position: absolute;
    width: 60vw;
    height: 70%;
    margin: 0 20vw;
    background: #ECFFDD;
    align-self: center;
    z-index: 1;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HeroWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding-top: 54px;
    z-index: 2;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        align-items: flex-start;
    }
`

export const HeroText = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-weight: 700;
    color: #1a3008;
    margin-left: 10vw;
    margin-bottom: 36px;
    h1 {
        margin: -24px 0;
        font-size: 5.8rem;
    }
    h2 {
        margin: -12px 0;
        font-size: 2.8rem;
    }
    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px) {
        h1 {
            margin: -24px 0;
            font-size: 4.8rem;
        }
        h2 {
            margin: -12px 0;
            font-size: 2.6rem;
        }
    }
    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
        h1 {
            margin: -16px 0;
            font-size: 3.6rem;
        }
        h2 {
            margin: -8px 0;
            font-size: 1.8rem;
        }
        margin-top: 36px;
    }
    
`
export const AppStoreContainer = styled.div`
    display: flex;
    width: 100%;
    margin-left: -12px;
    margin-top: 12px;
    @media screen and (max-width: 768px) {
        width: 70%;
    }
    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px) {
        width: 80%;
    }
`

export const AppStore = styled.div`
    width: 50%;
`