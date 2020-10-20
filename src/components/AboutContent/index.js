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
                    <img src={food} style={{"max-width": "85%", height: "auto", "border-radius": "5px"}} alt="/" />
                </ImageWrapper>
                <TextWrapper right>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at volutpat justo. Ut risus enim, mattis sed scelerisque suscipit, varius sed augue. Aenean scelerisque placerat turpis a feugiat. In hac habitasse platea dictumst. Vestibulum feugiat sit amet dui eget rhoncus.
                    </p>
                </TextWrapper>
            </ContentWrapper>
            <ContentWrapper left>
                <ImageWrapper>
                    <img src={food} style={{"max-width": "85%", height: "auto", "border-radius": "5px"}} alt="/" />
                </ImageWrapper>
                <TextWrapper left>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at volutpat justo. Ut risus enim, mattis sed scelerisque suscipit, varius sed augue. Aenean scelerisque placerat turpis a feugiat. In hac habitasse platea dictumst. Vestibulum feugiat sit amet dui eget rhoncus.
                    </p>
                </TextWrapper>
            </ContentWrapper>
            <ContentWrapper right>
                <ImageWrapper>
                    <img src={food} style={{"max-width": "85%", height: "auto", "border-radius": "5px"}} alt="/" />
                </ImageWrapper>
                <TextWrapper right>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at volutpat justo. Ut risus enim, mattis sed scelerisque suscipit, varius sed augue. Aenean scelerisque placerat turpis a feugiat. In hac habitasse platea dictumst. Vestibulum feugiat sit amet dui eget rhoncus.
                    </p>
                </TextWrapper>
            </ContentWrapper>
        </AboutContainer>
    )
}

export default AboutContent
