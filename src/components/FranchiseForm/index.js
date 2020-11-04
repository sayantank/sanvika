import React from 'react'
import { useForm } from "react-hook-form";

import {
    MainContainer,
    TextWrapper,
    TextContainer,
    FormContainer,
    RegForm,
    NumberWrapper,
    FormInput,
    SubmitButton,
    ErrorMsg
} from "./FranchiseFormElements";

const FranchiseForm = () => {
    const { handleSubmit, register, errors } = useForm();

    const validatePhoneNo = (value) => {
        if (isNaN(value) || value.trim().length !== 10) {
          return false;
        }
        return true;
    };

    const validateOutlet = (value) => {
        if (isNaN(value)) {
          return false;
        }
        return true;
    };

    const submitForm = (data) => {
        fetch("https://us-central1-sanvikafoodzo.cloudfunctions.net/newFranchise", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email.trim(),
                name: data.name.trim(),
                number: data.number.trim(),
                market: data.market.trim(),
                outlets: data.outlets.trim()
            })
        })
        .then((res) => res.json())
        .then((json) => {
            // console.log(json);
            if(json.success) {
                document.getElementById("sub-btn").innerHTML = "Successful";
                setTimeout(() => {
                    document.getElementById("sub-btn").innerHTML = "Submit Request";
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
        <>
            <MainContainer>
                <TextContainer>
                    <TextWrapper>
                        <h1>Apply Here</h1>
                        <p>Set up your first meeting with us.</p>
                    </TextWrapper>
                </TextContainer>
                <FormContainer>
                    <RegForm onSubmit={handleSubmit(submitForm)}>
                        <FormInput name="name" type="text" ref={register({required: "This field is required"})} err={errors.name?.message} placeholder="*Full Name" />
                        <ErrorMsg msg={errors.name?.message}>
                            {errors.name?.message}
                        </ErrorMsg>
                        <FormInput name="email" type="email" ref={register({required: "This field is required"})} err={errors.email?.message} placeholder="*Email Address" />
                        <ErrorMsg msg={errors.mail?.message}>
                            {errors.mail?.message}
                        </ErrorMsg>
                        <FormInput name="market" type="text" ref={register({required: "This field is required"})} err={errors.market?.message} placeholder="*Target Market (State/City)" />
                        <ErrorMsg msg={errors.market?.message}>
                            {errors.market?.message}
                        </ErrorMsg>
                        <FormInput name="outlets" type="text" ref={register({required: "This field is required", validate: (value) => validateOutlet(value) || "Invalid Input"})} err={errors.outlets?.message} placeholder="*No. of outlets" />
                        <ErrorMsg msg={errors.outlets?.message}>
                            {errors.outlets?.message}
                        </ErrorMsg>
                        <NumberWrapper>
                            <h1>+91</h1>
                            <FormInput name="number" type="text" ref={register({required: "This field is required", validate: (value) => validatePhoneNo(value) || "Invalid Mobile Number"})} err={errors.number?.message} placeholder="*Mobile Number" />
                        </NumberWrapper>
                        <ErrorMsg msg={errors.number?.message}>
                            {errors.number?.message}
                        </ErrorMsg>
                        <SubmitButton id="sub-btn" type="submit">Submit Request</SubmitButton>
                    </RegForm>
                </FormContainer>
            </MainContainer>
        </>
    )
}

export default FranchiseForm
