import styled from "styled-components";

export const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
    @media screen and (max-width: 768px) {
        width: 85%;
    }
`

export const TitleWrapper = styled.div`
    width: 100%;
    padding: 24px 0;
    h1 {
        font-size: 2.4rem;
        color: #1a3008;

        @media screen and (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
`

export const CategoryContainer = styled.div`
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: solid 3px #417F56;
    background: ${props => props.active ? "#417f56" : "none"};
    transition: all .2s ease-in-out;
    &:hover {
        transform: ${props => !props.active ? "scale(1.03)" : "none"};
    }
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.active ? "#fff" : "#417f56"};
    padding: 14px 0;
    cursor: pointer;
    
`

export const ItemWrapper = styled.div`
    display: ${props => props.active ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    font-size: 1.0rem;
    font-weight: 400;
    color: #417f56;
    background: #fff;
    padding: 14px 0;
`