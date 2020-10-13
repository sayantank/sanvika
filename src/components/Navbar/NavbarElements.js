import styled from "styled-components";

export const Nav = styled.div`
    position: sticky;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: ${props => props.bg === "top" ? "none" : "#ECFFDD"}
`

export const NavContainer = styled.div`
    max-width: 1080px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 8px;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 70%;
`

export const Title = styled.h1`
    font-color: #1A3008;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 6px;
`

export const PagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: -48px;
    

    a {
        color: #1A3008;
        font-size: 1rem;
        font-weight: 400;
        margin-right: 48px;
        text-decoration: none;
    }
    a:visited {
        color: #1A3008;
    }
`

export const Page = styled.h2`
    
`