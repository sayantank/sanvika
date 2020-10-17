import React from 'react';

import {ReactComponent as Night} from "../../images/night.svg"

import {
    ServiceContainer,
    ServiceWrapper,
    ServiceBlock,
    ServiceText,
    AboutRedirect
} from "./ServiceElements";

const Service = () => {
    return (
        <ServiceContainer>
            <h1>Our Services</h1>
            <ServiceWrapper>
                <ServiceBlock>
                    <Night style={{height: "50%", "margin-bottom": "24px"}} />
                    <ServiceText>
                        <p>Late Night Delivery from 7pm to 4am</p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <Night style={{height: "50%", "margin-bottom": "24px"}} />
                    <ServiceText>
                        <p>Late Night Delivery from 7pm to 4am</p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <Night style={{height: "50%", "margin-bottom": "24px"}} />
                    <ServiceText>
                        <p>Late Night Delivery from 7pm to 4am</p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <Night style={{height: "50%", "margin-bottom": "24px"}} />
                    <ServiceText>
                        <p>Late Night Delivery from 7pm to 4am</p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <Night style={{height: "50%", "margin-bottom": "24px"}} />
                    <ServiceText>
                        <p>Late Night Delivery from 7pm to 4am</p>
                    </ServiceText>
                </ServiceBlock>
            </ServiceWrapper>
            <AboutRedirect to="/about">
                Know more about us
            </AboutRedirect>
        </ServiceContainer>
    )
}

export default Service
