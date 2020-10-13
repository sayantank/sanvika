import React from 'react'
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from "../../images/sanvika.svg"
import { Nav, NavContainer, LogoContainer, Title, PagesContainer } from "./NavbarElements";

const Navbar = (props) => {
    return (
        <Nav bg={props.state}>
            <NavContainer>
                <LogoContainer>
                    <Logo style={{height:"100%"}}/>
                    <Title>Sanvika Foodzo</Title>
                </LogoContainer>
                <PagesContainer>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/franchise">Franchise</Link>
                </PagesContainer>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
