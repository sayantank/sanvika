import React from 'react'

import {ReactComponent as Night} from "../../images/night.svg"

import {
    MainContainer,
    BenefitsWrapper,
    BenefitsBlock,
    BenefitsText
} from "./BenefitsElements";

const Benefits = () => {
    return (
        <>
            <MainContainer>
                <h1>Benefits</h1>
                <BenefitsWrapper>
                    <BenefitsBlock>
                        <Night style={{height: "50%", "margin-bottom": "24px"}} />
                        <BenefitsText>
                            <p>Late Night Delivery from 7pm to 4am</p>
                        </BenefitsText>
                    </BenefitsBlock>
                    <BenefitsBlock>
                        <Night style={{height: "50%", "margin-bottom": "24px"}} />
                        <BenefitsText>
                            <p>Late Night Delivery from 7pm to 4am</p>
                        </BenefitsText>
                    </BenefitsBlock>
                    <BenefitsBlock>
                        <Night style={{height: "50%", "margin-bottom": "24px"}} />
                        <BenefitsText>
                            <p>Late Night Delivery from 7pm to 4am</p>
                        </BenefitsText>
                    </BenefitsBlock>
                    <BenefitsBlock>
                        <Night style={{height: "50%", "margin-bottom": "24px"}} />
                        <BenefitsText>
                            <p>Late Night Delivery from 7pm to 4am</p>
                        </BenefitsText>
                    </BenefitsBlock>
                </BenefitsWrapper>
            </MainContainer>
        </>
    )
}

export default Benefits
