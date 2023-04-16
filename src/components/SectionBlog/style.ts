import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 540px;
    background: linear-gradient(180deg, var(--dark-3) 0%, var(--black-1) 101.48%);
    div {
        display: flex;
        gap: 5px;
    }
    position: relative;
`
export const Aside = styled.aside`
    display: flex;
    padding: 41px 56px;
    justify-content: space-between;
`
export const Main = styled.main`
    display: flex;
    justify-content: center;
    padding: 0px 56px;
    ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`
export const Card = styled.li`
    width: 376px;
    height: 380px;
    box-sizing: border-box;
    border: 1px solid var(--dark-3);
    background-color: var(--dark-1);
    main {
        padding: 10px 32px 10px 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`
