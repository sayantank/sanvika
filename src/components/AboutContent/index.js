import React from 'react'
import food from "../../images/food.jpg";

import {
    AboutContainer,
    ContentWrapper,
    ImageWrapper,
    TextWrapper
} from "./AboutContentElements";

const AboutContent = () => {
    return (
        <AboutContainer>
            <h1>About us</h1>
            <ContentWrapper right>
                <ImageWrapper>
                    <img src={food} style={{maxWidth: "85%", height: "auto", borderRadius: "5px"}} alt="/" />
                </ImageWrapper>
                <TextWrapper right>
                    <p>
                        Sanvika Foodzo is a cloud kitchen, which offers friendly, convenient and delicious food delivery services. Our cuisine focuses on traditional family-style recipes with some of the finest local seasonal produce.
                    </p>
                </TextWrapper>
            </ContentWrapper>
            <ContentWrapper left>
                <ImageWrapper>
                    <img src={food} style={{maxWidth: "85%", height: "auto", borderRadius: "5px"}} alt="/" />
                </ImageWrapper>
                <TextWrapper left>
                    <p>
                    We are located in Manipal and serve you at your home with a quick delivery service. You can check our menu to find a large variety of delicious dishes.
                    </p>
                </TextWrapper>
            </ContentWrapper>
            <ContentWrapper right>
                <ImageWrapper>
                    <img src={food} style={{maxWidth: "85%", height: "auto", borderRadius: "5px"}} alt="/" />
                </ImageWrapper>
                <TextWrapper right>
                    <p>
                    Our service is available all day, everyday from breakfast to dinner. We also have combo meals and daily meal options for people looking for monthly packages.
                    </p>
                </TextWrapper>
            </ContentWrapper>
        </AboutContainer>
    )
}

export default AboutContent
