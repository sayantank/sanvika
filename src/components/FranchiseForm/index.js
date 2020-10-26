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
    SubmitButton
} from "./FranchiseFormElements";

const FranchiseForm = () => {
    const { handleSubmit, register, errors } = useForm();
    const submitForm = (data) => {
        console.log(data)
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
                        <FormInput name="name" type="text" ref={register({required: "This field is required"})} err={errors.name?.message} placeholder="Full Name" />
                        <FormInput name="email" type="email" ref={register({required: "This field is required"})} err={errors.email?.message} placeholder="Email Address" />
                        <FormInput name="targ" type="text" ref={register({required: "This field is required"})} err={errors.targ?.message} placeholder="Target Market (State/City)" />
                        <FormInput name="out" type="text" ref={register({required: "This field is required"})} err={errors.out?.message} placeholder="No. of outlets" />
                        <NumberWrapper>
                            <h1>+91</h1>
                            <FormInput name="phone" type="text" ref={register({required: "This field is required"})} err={errors.phone?.message} placeholder="Mobile Number" />
                        </NumberWrapper>
                        <SubmitButton type="submit">Submit Request</SubmitButton>
                    </RegForm> 
                </FormContainer>
            </MainContainer>
        </>
    )
}

export default FranchiseForm
