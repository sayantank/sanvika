import React from 'react'

import {
    MainContainer,
    TextWrapper,
    WhyRedirect
} from "./MissionElements";

const Mission = () => {
    return (
        <>
            <MainContainer>
                <TextWrapper>
                    <h1>Our Mission</h1>
                    <p>Grow with Sanvika Foodzo Franchises.<br/>Launch and grow your food delivery business.<br/>A cost effective way to launch.<br/>Increase revenues with reduced risk and operating costs.</p>
                    <p>Our technology is built for restaurateurs, chefs, and culinary teams to launch and grow your business. Our simple tablet solution allows you to have your own delivery app which help you save your aggregator hosting commission</p>
                    <WhyRedirect to="/why">Why Sanvika?</WhyRedirect>
                </TextWrapper>
            </MainContainer>
        </>
    )
}

export default Mission
