import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServiceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 54px;
    h1 {
        font-size: 1.6rem;
        color: #1a3008;
        font-weight: 700;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 24px;
    }
`

export const ServiceWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    width: 80vw;
    margin-top: 32px;
`

export const ServiceBlock = styled.div`
    //background: #fafafa;
    margin-bottom: 24px;
    padding: 18px 18px;
    flex: 1;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //box-shadow: 0px 0px 36px 0px rgba(0,0,0,0.08);
`

export const ServiceText = styled.div`
    text-align: center;
    p {
        font-size: 1rem;
        font-weight: 500;
        color: #417F56;
        line-height: 1.3rem;
    }
`

export const AboutRedirect = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    background: #417F56;
    padding: 10px 24px;
    border-radius: 5px;
    font-weight: 400;
    transition: all .2s ease-in-out;
    font-size: 1rem;

    &:hover {
        transform: scale(1.05);
        font-weight: 600;
    }
`