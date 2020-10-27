import React from 'react'

import {FaBars} from "react-icons/fa";
import {ReactComponent as Logo} from "../../images/sanvika.svg"
import { Nav, NavContainer, LogoContainer, Title, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavbarElements";

const Navbar = (props) => {
    return (
        <Nav bg={props.scroll}>
            <NavContainer>
                <LogoContainer>
                    <Logo style={{height:"65%"}}/>
                    <Title>Foodzo</Title>
                </LogoContainer>
                <MobileIcon onClick={props.toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/" bold={props.page === "home" ? "true" : "false"}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about" bold={props.page === "about" ? "true" : "false"}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/menu" bold={props.page === "menu" ? "true" : "false"}>Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/franchise" bold={props.page === "franchise" ? "true" : "false"}>Franchise</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
