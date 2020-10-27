import React from 'react'
import { useForm } from "react-hook-form";

import {
    ConnectContainer,
    ConnectWrapper,
    ConnectForm,
    ConnectInput,
    ConnectSubmit
} from "./ConnectElements";

const Connect = () => {

    const { handleSubmit, register, errors } = useForm();

    const submitForm = (data) => {
        fetch("https://us-central1-sanvikafoodzo.cloudfunctions.net/newFranchise", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email.trim()
            })
        })
        .then((res) => res.json())
        .then((json) => {
            if(json.success) {
                document.getElementById("con-btn").innerHTML = "Successful";
                setTimeout(() => {
                    document.getElementById("con-btn").innerHTML = "Submit";
                }, 3000)
            } else {
                alert("Internal Server Error");
            }
        })
        .catch(e => {
            alert("Internal Server Error");
        })
    };

    return (
        <ConnectContainer>
            <ConnectWrapper>
                <h1>Connect with us</h1>
                <h2>Join our adventure and be the first ones to know everything about us and where we’re headed next!</h2>
                <ConnectForm onSubmit={handleSubmit(submitForm)}>
                    <ConnectInput name="email" type="email" ref={register({required: "This field is required"})} err={errors.email?.message} placeholder="Email Address"/>
                    <ConnectSubmit type="submit" id="con-btn">Submit</ConnectSubmit>
                </ConnectForm>
            </ConnectWrapper>
        </ConnectContainer>
    )
}

export default Connect
