import React from 'react'

import {
    MenuTeaserContainer,
    MenuTeaserWrapper,
    MenuRedirect,
} from "./MenuTeaserElements";

const MenuTeaser = () => {
    return (
        <MenuTeaserContainer>
            <MenuTeaserWrapper>
                <h1>What's<br/>Cooking?</h1>
                <MenuRedirect to="/menu">
                    Check out our menu
                </MenuRedirect>
            </MenuTeaserWrapper>    
        </MenuTeaserContainer>
    )
}

export default MenuTeaser
