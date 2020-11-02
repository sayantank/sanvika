import styled from "styled-components";

export const Nav = styled.div`
    top: 0;
    height: 60px;
    width: 100%;
    //padding-top: 10px;
    z-index: 10;
`

export const NavContainer = styled.div`
    max-width: 1280px;
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
    font-weight: 800;
    margin-left: 6px;
`