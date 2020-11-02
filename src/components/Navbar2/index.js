import React from 'react'
import {useHistory} from "react-router-dom";

import {ReactComponent as Logo} from "../../images/sanvika.svg"
import { Nav, NavContainer, LogoContainer, Title } from "./Navbar2Elements";

const Navbar2 = (props) => {

    const history = useHistory();

    const redirectHome = () => {
        history.push("/");
    }

    return (
        <Nav bg={props.scroll}>
            <NavContainer>
                <LogoContainer>
                    <Logo style={{height:"65%", cursor:"pointer"}} onClick={redirectHome}/>
                    <Title>Foodzo {props.title}</Title>
                </LogoContainer>
            </NavContainer>
        </Nav>
    )
}

export default Navbar2
