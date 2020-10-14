import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ecffdd;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color:  #1a3008;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6,60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 600;
    list-style: none;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    color: #1a3008;
    cursor: pointer;

    &:hover {
        color: #49811C;
        transition: 0.2s ease-in-out;
    }
`

