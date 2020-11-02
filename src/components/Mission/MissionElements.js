import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainContainer = styled.div`
    width: 100%;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #edffdd;
`

export const TextWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.6rem;
        color: #1a3008;
        margin-bottom: 28px;
    }
    p {
        text-align: center;
        color: #417f56;
        margin-bottom: 14px;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        padding-bottom: 28px;
        h1 {
            margin-top: 28px;
        }
        p {
            margin-bottom: 16px;
        }
    }
`

export const WhyRedirect = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    background: #417F56;
    padding: 10px 36px;
    border-radius: 5px;
    font-weight: 400;
    transition: all .2s ease-in-out;
    font-size: 1rem;
    margin: 24px 0;
    &:hover {
        transform: scale(1.05);
        font-weight: 600;
    }
`