import React from 'react'

import {ReactComponent as Logo} from "../../images/sanvika.svg"
import { Nav, NavContainer, LogoContainer, Title } from "./Navbar2Elements";

const Navbar2 = (props) => {
    return (
        <Nav bg={props.scroll}>
            <NavContainer>
                <LogoContainer>
                    <Logo style={{height:"65%"}}/>
                    <Title>Foodzo {props.title}</Title>
                </LogoContainer>
            </NavContainer>
        </Nav>
    )
}

export default Navbar2
