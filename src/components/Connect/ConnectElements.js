import styled from "styled-components";

export const ConnectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ConnectWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 54px 0px;
    word-wrap: break-word;
    text-align: center;

    h1 {
        color: #1a3008;
        font-size: 1.6rem;
        margin-bottom: 24px;
    }

    h2 {
        color: #407953;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2rem;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 768px) {
        width: 80%;

        h2 {
            font-size: 0.9rem;
            line-height: 1.1rem;
        }
    }

    @media screen
    and (max-width: 1024px)
    and (min-width: 768px) {
        width: 60%;
    }
`

export const ConnectForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ConnectInput = styled.input`
    width: 100%;
    border: 3px solid #407953;
    border-radius: 8px;
    margin-bottom: 6px;
    padding: 12px;
    font-size: 1rem;

    &:focus {
        outline-width: 0;
    }

    @media screen and (max-width: 768px) {
        padding: 10px;
        font-size: 0.9rem;
    }
`

export const ConnectSubmit = styled.button`
    width: 100%;
    border-radius: 8px;
    background: #407953;
    box-shadow: none;
    border: none;
    padding: 10px;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        font-weight: 600;
    }

    @media screen and (max-width: 768px) {
        padding: 10px;
        font-size: 0.9rem;
    }
`