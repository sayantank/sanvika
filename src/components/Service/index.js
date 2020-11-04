import React from 'react';

import {ReactComponent as Night} from "../../images/night.svg"
import {ReactComponent as Food} from "../../images/food.svg"
import {ReactComponent as Phone} from "../../images/phone.svg"
import {ReactComponent as Stop} from "../../images/stop.svg"
import {ReactComponent as All} from "../../images/all.svg"

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
                    <Night style={{height: "100%", marginBottom: "18px"}} />
                    <ServiceText>
                        <p>Late Night Delivery From 7pm to 4am</p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <Phone style={{height: "100%", marginBottom: "18px"}} />
                    <ServiceText>
                        <p>Order On Our <a href="https://onelink.to/w4d2wn" rel="noopener noreferrer" target="_blank" style={{textDecoration: "none", color: "#417f56"}}><b>Mobile App</b></a></p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <Stop style={{height: "100%", marginBottom: "18px"}} />
                    <ServiceText>
                        <p>Delivery Within 40 Mins</p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <All style={{height: "100%", marginBottom: "18px"}} />
                    <ServiceText>
                        <p>Food For Every Kind Of Hunger</p>
                    </ServiceText>
                </ServiceBlock>
                <ServiceBlock>
                    <Food style={{height: "100%", marginBottom: "18px"}} />
                    <ServiceText>
                        <p>Place Bulk Orders Through Our App</p>
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
