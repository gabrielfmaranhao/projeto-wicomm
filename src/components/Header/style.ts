import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
`
export const Details = styled.div`
    display: flex;
    background-color: var(--dark-1);
    height: 32px;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px;
    div{
        display: flex;
        gap: 8px;
        align-items: center;
        img{
            width: 20px;
            height: 20px;
        }
    }
`
export const Nav = styled.menu`
    height: 72px;
    background-color: var(--black-1);
    display: flex;
    padding: 0 70px;
    align-items: center;
    justify-content: space-between;
    img {
        width: 166px;
        height: 32px;
    }
    ul {
        display: flex;
        gap: 20px;
    }
`
export const Search = styled.section`
    display: flex;
    padding: 10px;
    background-color: var(--dark-1);
    border: 1px solid var(--dark-3);
    border-radius: 4px;
    box-sizing: border-box;
    /* outline: auto; */
    img{
        width:24px;
        height: 24px;
    }
`
export const Infomations= styled.section`
    background-color: var(--black-1);
    display: flex;
    gap: 20px;
    img{
        width: 24px;
        height: 24px;
    }
`
