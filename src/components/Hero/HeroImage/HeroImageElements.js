import styled, {keyframes} from "styled-components";

export const HeroImageContainer = styled.div`
    display: flex;
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
    flex: 0.7;
    margin-bottom: 54px;
    animation: ${float} 3s ease-in-out infinite;
`

export const Food = styled.img`
    width: 100%;
    height: auto;
    transform: rotate(-3deg);
`

export const TextWrapper = styled.div`
    display: flex;
    margin-bottom: 36px;
    flex-direction: column;
    justify-content: center;
`
export const FoodTitle = styled.h1`
    color: #49811C;
    font-size: 3rem;
    line-height: 54px;
`

export const FoodPrice = styled.h2`
    color: #1a3008;
    font-size: 3.6rem;
    font-weight: 700;
`