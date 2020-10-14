import styled from "styled-components";
import {Link} from "react-router-dom";

export const Nav = styled.div`
    position: sticky;
    top: 0;
    height: 54px;
    width: 100%;
    z-index: 10;
    margin-top: 12px;
    background-color: ${props => props.bg === "top" ? "none" : "#ECFFDD"}

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavContainer = styled.div`
    max-width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 24px;
    z-index: 1;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-self: flex-start;
    height: 70%;
`

export const Title = styled.h1`
    font-color: #1A3008;
    font-size: 1.1rem;
    font-weight: 600;
    margin-left: 6px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 25%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #1a3008;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -36px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 60px;
`

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;
    color: #1A3008;
    font-size: 1rem;
    font-weight: 400;
    margin-right: 36px;
    text-decoration: none;

    &.active {
        border-bottomg: 3px solid #1A3008;
    }
`