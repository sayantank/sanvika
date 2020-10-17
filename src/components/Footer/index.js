import React from 'react'

import {
    FooterContainer,
    FooterWrapper,
    FooterColumn,
    FooterBlock,
    CopyrightWrapper
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterColumn>
                    <FooterBlock>
                        <h1>Contact us</h1>
                        <h2>sanvika@gmail.com</h2>
                        <h2>+91 7865674563</h2>
                        <h3>Available from 7pm to 3am.</h3>
                    </FooterBlock>
                </FooterColumn>
                <FooterColumn>
                    <FooterBlock>
                        <h1>Head Office</h1>
                        <h2>Eshwar Nagar, Manipal<br/>576104</h2>
                    </FooterBlock>
                    <FooterBlock>
                        <h1>Locations</h1>
                        <h2>Manipal</h2>
                        <h2>Mangaluru</h2>
                    </FooterBlock>
                </FooterColumn>
                <FooterColumn>
                    <FooterBlock>
                        <h1>FAQs</h1>
                        <h2>Delivery Policies</h2>
                        <h2>Privacy Policies</h2>
                        <h2>Franchise</h2>
                    </FooterBlock>
                </FooterColumn>
                <FooterColumn>
                    <FooterBlock>
                        <h1>Follow us</h1>
                        <h2>Instagram</h2>
                        <h2>Facebook</h2>
                        <h2>Twitter</h2>
                    </FooterBlock>
                </FooterColumn>
            </FooterWrapper>
            <CopyrightWrapper>
                Copyright 2020. Sanvika Foodzo. All rights reserved.
            </CopyrightWrapper>
        </FooterContainer>
    )
}

export default Footer
