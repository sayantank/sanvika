import React from 'react'

import burger from "../../../images/burger.png";

import {
    HeroImageContainer,
    FoodWrapper,
    Food,
    TextWrapper,
    FoodTitle,
    FoodPrice
} from "./HeroImageElements";

const HeroImage = () => {
    return (
        <HeroImageContainer>
            <FoodWrapper>
                <Food src={burger} alt="" />
            </FoodWrapper>
            <TextWrapper>
                <FoodTitle>
                    Crispy<br/>Chicken<br/>Burger
                </FoodTitle>
                <FoodPrice>
                    ₹79
                </FoodPrice>
            </TextWrapper>
        </HeroImageContainer>
    )
}

export default HeroImage
