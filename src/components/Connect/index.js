import React from 'react'
import { useForm } from "react-hook-form";

import {
    ConnectContainer,
    ConnectWrapper,
    ConnectForm,
    ConnectInput,
    ConnectSubmit,
    NumberWrapper,
    ErrorMsg
} from "./ConnectElements";

const Connect = () => {

    const { handleSubmit, register, errors } = useForm();

    const validatePhoneNo = (value) => {
        if(value.trim().length === 0){
            return true
        }
        else if (isNaN(value) || value.trim().length !== 10) {
          return false;
        }
        return true;
    };

    const submitForm = (data) => {
        let formData = {}
        formData['email'] = data.email.trim();
        if(data.number !== "" && data.number !== null && data.number !== undefined){
            formData['number'] = data.number.trim();
        }

        console.log(formData);
        fetch("https://us-central1-sanvikafoodzo.cloudfunctions.net/newFranchise", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
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
                    <ConnectInput name="email" type="email" ref={register({required: "This field is required"})} err={errors.email?.message} placeholder="*Email Address"/>
                    <NumberWrapper>
                        <h1>+91</h1>
                        <ConnectInput name="number" type="text" ref={register({validate: (value) => validatePhoneNo(value) || "Invalid Mobile Number"})} err={errors.number?.message} placeholder="Mobile Number" />
                    </NumberWrapper>
                    <ErrorMsg msg={errors.number?.message}>
                        {errors.number?.message}
                    </ErrorMsg>
                    <ConnectSubmit type="submit" id="con-btn">Submit</ConnectSubmit>
                </ConnectForm>
            </ConnectWrapper>
        </ConnectContainer>
    )
}

export default Connect
