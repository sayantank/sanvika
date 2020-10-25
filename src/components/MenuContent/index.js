import React, { useEffect, useState } from 'react'
import MenuData from "../../data/MenuData"

import {
    MainContainer, 
    TitleWrapper,
    CategoryContainer,
    HeaderWrapper,
    ItemWrapper
} from "./MenuContentElements";

const MenuContent = () => {
    const Categories = ["Starters", "Burgers", "Main Course", "Wraps", "Drinks", "Desserts"]
    const [active, setActive] = useState({
        "Starters": false,
        "Burgers": false,
        "Main Course": false,
        "Wraps": false,
        "Drinks": false,
        "Desserts": false
    })
    useEffect(() => {
        console.log(active)
    }, [active])

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
                    Categories.map((category) => 
                        <CategoryContainer active={active[category]}>
                            <HeaderWrapper onClick={() => toggle(category)} active={active[category]}>
                                {category}
                            </HeaderWrapper>
                            {
                                MenuData[category].map((item) => <ItemWrapper active={active[category]}>{item}</ItemWrapper>)
                            }
                        </CategoryContainer>
                    )
                }
            </MainContainer>
        </>
    )
}

export default MenuContent
