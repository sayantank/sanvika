import React from 'react'

import PrivacyData from "../../data/PrivacyData";

import {
    MainContainer,
    Wrapper,
    SubHeader,
    SubList, 
    ListItem
} from "./TermsContentElements";

const TermsContent = () => {

    const Headers = Object.keys(PrivacyData)

    return (
        <MainContainer>
            {
                Headers.map((header, i) => 
                    <Wrapper key={i}>
                        <SubHeader>{header}</SubHeader>
                        <SubList>
                            {
                                PrivacyData[header].map((item, i) =>
                                    <ListItem key={i}>{item}</ListItem>
                                )
                            }
                        </SubList>
                    </Wrapper>
                )
            }
        </MainContainer>
    )
}

export default TermsContent
