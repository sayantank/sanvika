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
                            <img src={playstore} style={{width: "100%", height: "auto"}} alt="/" />
                        </AppStore>
                        <AppStore>
                            <img src={appstore} style={{width: "100%", height: "auto"}} alt="/" />
                        </AppStore>
                    </AppStoreContainer>
                </HeroText>
                <HeroImage />
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
