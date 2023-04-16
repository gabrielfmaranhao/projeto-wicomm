import styled from "styled-components";


export const Container = styled.li`
    width: 277px;
    height: 341px;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border: 1px solid var(--gray-3);
    align-items: center;
    justify-content: center;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    position: relative;
    left: 10%;
    h4{
        width: 166px;
    }
`
export const Icons = styled.section`
    display: flex;
    height: 0px;
    flex-direction: column;
    position: relative;
    top: -80%;
    left: 40%;
    gap: 10px;
`
