import React, { useState } from 'react'
import MenuData from "../../data/menu.json"

import {
    MainContainer, 
    TitleWrapper,
    CategoryContainer,
    HeaderWrapper,
    ItemWrapper
} from "./MenuContentElements";

const MenuContent = () => {
    const Categories = Object.keys(MenuData)

    let startState = {}
    for(const key of Categories) {
        startState[key] = false
    }

    const [active, setActive] = useState(startState)

    const toggle = (category) => {
        let newState = {...active}
        newState[category] = !newState[category];
        setActive(newState);
    }
    return (
        <>
            <MainContainer>
                <TitleWrapper>
                    <h1>Our Menu</h1>
                </TitleWrapper>
                {
                    Categories.map((category, i) => 
                        <CategoryContainer key={i} active={active[category]}>
                            <HeaderWrapper onClick={() => toggle(category)} active={active[category]}>
                                {category}
                            </HeaderWrapper>
                            {
                                MenuData[category].map((item, i) => <ItemWrapper key={i} active={active[category]}>{item}</ItemWrapper>)
                            }
                        </CategoryContainer>
                    )
                }
            </MainContainer>
        </>
    )
}

export default MenuContent
