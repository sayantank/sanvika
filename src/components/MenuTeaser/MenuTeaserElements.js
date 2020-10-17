import { Link } from "react-router-dom";
import styled from "styled-components";
import cooking from "../../images/cooking.jpg";

export const MenuTeaserContainer = styled.div`
    height: 480px;
    width: 100%;
    background-image: url(${cooking});
    background-size: cover;
    margin-bottom: 54px;
`

export const MenuTeaserWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(64, 121, 83, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10vw;
    h1 {
        font-size: 7rem;
        line-height: 104px;
        color: #fff;
        font-weight: 600;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        text-align: center;

        @media screen
        and (max-width: 768px) {
            font-size: 3.8rem;
            line-height: 56px;
        }
        @media screen
        and (min-width: 768px)
        and (max-width: 1024px) {
            font-size: 5rem;
            line-height: 76px;
        }
    }
`

export const MenuRedirect = styled(Link)`
    font-size: 1rem;
    font-weight: 500;
    color: #407953;
    //text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    text-decoration: none;
    cursor: pointer;
    margin-top: 36px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        font-weight: 600;
    }
`