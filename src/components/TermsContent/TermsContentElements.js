import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 70%;
    padding: 18px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        min-width: 80%;
    }
`

export const SubHeader = styled.h1`
    font-size: 1.2rem;
    color: #1a3008;
    margin-bottom: 12px;
`

export const SubText = styled.p`
    font-size: 1rem;
    color: #417F56;
    margin: 18px 0;
`

export const SubList = styled.ul`

`

export const ListItem = styled.li`
    color: #417F56;
    margin-bottom: 8px;
`