import styled, {keyframes} from "styled-components";

export const HeroImageContainer = styled.div`
    display: flex;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        background: #ecffdd;
    }
`

const float = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 10px); }
    to   { transform: translate(0, -0px); } 
`;

export const FoodWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.8;
    margin-bottom: 54px;
    animation: ${float} 3s ease-in-out infinite;
    
    @media screen and (max-width: 768px) {
        margin-bottom: 14px;
    }
`

export const Food = styled.img`
    width: 100%;
    height: auto;
    transform: rotate(-3deg);
    @media screen and (max-width: 768px) {
        width: 80%;
    }
    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px) {
        width: 60%;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    margin-bottom: 36px;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }
`
export const FoodTitle = styled.h1`
    color: #49811C;
    font-size: 3rem;
    line-height: 54px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 36px;
    }
`

export const FoodPrice = styled.div`
    display: flex;
    margin-left: 16px;  
    h2 {
        color: #1a3008;
        font-size: 3.6rem;
        font-weight: 700;
    }
    h3 {
        color: #1a3008;
        font-size: 1.8rem;
        font-weight: 700;
        align-self: flex-end;
        margin-bottom: 0.67rem;
        margin-left: 0.3rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        h2 {
            font-size: 3rem;
        }
        h3 {
            font-size: 1.2rem;
            margin-top: -20px;
        }
    }
`