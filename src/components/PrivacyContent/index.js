import React from 'react'

import {
    MainContainer,
    Wrapper,
    SubHeader,
    SubText,
    SubList,
    ListItem
} from "../TermsContent/TermsContentElements";

const PrivacyContent = () => {
    return (
        <MainContainer>
            <Wrapper>
                <SubHeader>Privacy Policy</SubHeader>
                <SubList>
                    <ListItem>A customer has the right to explore the Sanvika Foodzo App without supplying personal identifiable information.</ListItem>
                    <ListItem>Sanvika Foodzo reserves the right to collect personal information from the customer including and not limited to first and last name, telephone & mobile numbers, email address, delivery address and any other information voluntarily provided by the customer.</ListItem>
                </SubList>
                <SubText><b>This information is collected in the event a customer</b></SubText>
                <SubList>
                    <ListItem>Places an order.</ListItem>
                    <ListItem>Enters a contest or promotional activity.</ListItem>
                    <ListItem>Submits feedback.</ListItem>
                </SubList>
            </Wrapper>
            <Wrapper>
                <SubHeader>Use and Disclosure</SubHeader>
                <SubList>
                    <ListItem>Apart from the events mentioned above, Sanvika Foodzo may use the personal information collected to improve the content of the website/app, customize the website/app to the customer's preferences, communicate information to the customer, and for any other specified purposes.</ListItem>
                    <ListItem>Sanvika Foodzo may also store and process the personal information collected in order to provide goods and services.</ListItem>
                </SubList>
                <SubText><b>The personal information is used in accordance to the customers benefit, including but not limited to any of the following purposes.</b></SubText>
                <SubList>
                    <ListItem>Provide the customer with outlet or promotion information.</ListItem>
                    <ListItem>Process an online order placed by the customer.</ListItem>
                    <ListItem>Submits feedback.</ListItem>
                </SubList>
            </Wrapper>
            <Wrapper>
                <SubHeader>Online Payments</SubHeader>
                <SubText>
                We use Razorpay for processing Online Payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
                </SubText>
                <SubText>
                Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
                </SubText>
                <SubText>
                PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
                </SubText>
                <SubText>
                For more insight, you may also want to read terms and conditions of razorpay on <a href="https://razorpay.com">https://razorpay.com</a>
                </SubText>
            </Wrapper>
        </MainContainer>
    )
}

export default PrivacyContent
