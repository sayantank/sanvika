import React from 'react'

import playstore from "../../images/playstore.png";
import appstore from "../../images/appstore.png";
import {
    Background,
    HeroContainer,
    HeroWrapper,
    HeroText,
    AppStoreContainer,
    AppStore
} from "./HeroElements";

import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <HeroContainer>
            <Background />
            <HeroWrapper>
                <HeroText>
                    <h2>the newest</h2>
                    <h1>Cloud</h1>
                    <h1>Kitchen</h1>
                    <h2>in Manipal.</h2>
                    <AppStoreContainer>
                        <AppStore>
                            <a href="https://play.google.com/store/apps/details?id=sanvika.foodzo.com" rel="noopener noreferrer" target="_blank">
                                <img src={playstore} style={{width: "100%", height: "auto"}} alt="/" />
                            </a>
                        </AppStore>
                        <AppStore>
                            <a href="https://apps.apple.com/in/app/sanvika-foodzo/id1515431959" rel="noopener noreferrer" target="_blank">
                                <img src={appstore} style={{width: "100%", height: "auto"}} alt="/" />
                            </a>
                        </AppStore>
                    </AppStoreContainer>
                </HeroText>
                <HeroImage />
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
