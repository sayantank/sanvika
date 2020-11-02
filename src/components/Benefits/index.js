import React from 'react'

import {ReactComponent as Wallet} from "../../images/wallet.svg"
import {ReactComponent as Skill} from "../../images/skill.svg"
import {ReactComponent as POS} from "../../images/pos.svg"
import {ReactComponent as Money} from "../../images/money.svg"

import {
    MainContainer,
    BenefitsWrapper,
    BenefitsBlock,
    BenefitsTitle,
    BenefitsText
} from "./BenefitsElements";

const Benefits = () => {
    return (
        <>
            <MainContainer>
                <h1>Benefits</h1>
                <BenefitsWrapper>
                    <BenefitsBlock>
                        <Wallet style={{maxHeight: "30%", marginBottom: "24px"}} />
                        <BenefitsTitle>Low Investment</BenefitsTitle>
                        <BenefitsText>
                            No need of prime roadside location, interior decor. A office desk and any well hygenic kitchen space is enough.
                        </BenefitsText>
                    </BenefitsBlock>
                    <BenefitsBlock>
                        <Skill style={{maxHeight: "30%", marginBottom: "24px"}} />
                        <BenefitsTitle>Basic Skillset</BenefitsTitle>
                        <BenefitsText>
                            Anyone with basic training can step into the shoes of the staff. No serious training is required. Materials are sent.
                        </BenefitsText>
                    </BenefitsBlock>
                    <BenefitsBlock>
                        <POS style={{maxHeight: "30%", marginBottom: "24px"}} />
                        <BenefitsTitle>In-House POS</BenefitsTitle>
                        <BenefitsText>
                            POS will be provided to manage and track orders with ease. All the applications are interconnected to the POS. Moreover call centre customer support will also be provided.
                        </BenefitsText>
                    </BenefitsBlock>
                    <BenefitsBlock>
                        <Money style={{maxHeight: "30%", marginBottom: "24px"}} />
                        <BenefitsTitle>Good Profit Margin</BenefitsTitle>
                        <BenefitsText>
                            Establishment running cost is much lesser than traditional restaurant. You are in for a good profit margin.
                        </BenefitsText>
                    </BenefitsBlock>
                </BenefitsWrapper>
            </MainContainer>
        </>
    )
}

export default Benefits
