import React from 'react'

import {FaBars} from "react-icons/fa";
import {ReactComponent as Logo} from "../../images/sanvika.svg"
import { Nav, NavContainer, LogoContainer, Title, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavbarElements";

const Navbar = (props) => {
    return (
        <Nav bg={props.state}>
            <NavContainer>
                <LogoContainer>
                    <Logo style={{height:"90%"}}/>
                    <Title>Sanvika Foodzo</Title>
                </LogoContainer>
                <MobileIcon onClick={props.toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/menu">Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/franchise">Franchise</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
