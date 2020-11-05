import React from 'react'
import {Link} from "react-router-dom";
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
                        <h2><Link to="/terms" rel="noopener noreferrer" target="_blank">Terms and Conditions</Link></h2>
                        <h2><Link to="/privacy" rel="noopener noreferrer" target="_blank">Privacy Policy</Link></h2>
                        <h2><Link to="/franchise">Franchise</Link></h2>
                    </FooterBlock>
                </FooterColumn>
                <FooterColumn>
                    <FooterBlock>
                        <h1>Follow us</h1>
                        <h2><a href="https://wa.me/message/BGU6HEM7N3H7A1" rel="noopener noreferrer" target="_blank">Whatsapp</a></h2>
                        <h2><a href="https://www.instagram.com/sanvikafoodzo/" rel="noopener noreferrer" target="_blank">Instagram</a></h2>
                        <h2><a href="https://www.facebook.com/Sanvikafoodzo008/" rel="noopener noreferrer" target="_blank">Facebook</a></h2>
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
