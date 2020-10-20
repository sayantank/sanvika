import React from 'react'
import about from "../../images/about.png";

import {
    AboutHeroContainer,
    AboutHeroWrapper,
    HeroTitle,
    IllustrationWrapper,
} from "./AboutHeroElements";

const AboutHero = () => {
    return (
        <AboutHeroContainer>
            <AboutHeroWrapper>
                <HeroTitle>
                    <h1>We strive to deliver food to you when you need it the most.</h1>
                </HeroTitle>
                <IllustrationWrapper>
                    <img src={about} style={{width: "85%", height: "auto"}} alt="/" />
                </IllustrationWrapper>
            </AboutHeroWrapper>
        </AboutHeroContainer>
    )
}

export default AboutHero
