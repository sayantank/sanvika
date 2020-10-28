import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 360px;
    margin-bottom: 54px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: -36px;
    }
`

export const TextContainer = styled.div`
    flex: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    width: 50%;
    height: auto;
    h1 {
        word-wrap: break-word;
        font-size: 5rem;
        color: #1a3008;
        line-height: 5.2rem;
    }

    p {
        color: #1a3008;
        font-weight: 500;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 3.4rem;
            text-align: center;
            line-height: 3.6rem;
        }
        p {
            font-size: 0.8rem;
            text-align: center;
            margin-top: 12px;
        }
        width: 60%;
        margin-bottom: 24px;
    }
`

export const FormContainer = styled.div`
    flex: 1;
    background: #ecffdd;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
`

export const RegForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`

export const FormInput = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 3px solid #417f56;
    background: transparent;
    font-size: 1rem;
    padding: 10px 12px;
    color: #417f56;
    margin-bottom: 24px;

    &:focus {
        outline-width: 0;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: rgba(65,127,86,0.5);
    }
    :-ms-input-placeholder {
        color: rgba(65,127,86,0.5);
    }
`

export const NumberWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    h1 {
        font-size: 1.3rem;
        color: #417f56;
        margin-top: -24px;
        margin-right: 12px;
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    background: #417f56;
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ecffdd;
    padding: 12px;
    text-align: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.03);
    }
    &:focus {
        outline-width: 0;
    }
`

export const ErrorMsg = styled.p`
  color: #1a3008;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 500;
  width: 100%;
  margin-bottom: 14px;
  margin-top: -18px;
  display: ${(props) => props.msg === "" || props.msg === undefined ? "none" : "block"};
`;