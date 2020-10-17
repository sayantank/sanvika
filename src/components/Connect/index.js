import React from 'react'

import {
    ConnectContainer,
    ConnectWrapper,
    ConnectForm,
    ConnectInput,
    ConnectSubmit
} from "./ConnectElements";

const Connect = () => {
    return (
        <ConnectContainer>
            <ConnectWrapper>
                <h1>Connect with us</h1>
                <h2>Join our adventure and be the first ones to know everything about us and where we’re headed next!</h2>
                <ConnectForm>
                    <ConnectInput type="email" placeholder="Email Address"/>
                    <ConnectSubmit>Submit</ConnectSubmit>
                </ConnectForm>
            </ConnectWrapper>
        </ConnectContainer>
    )
}

export default Connect
