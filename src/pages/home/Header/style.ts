import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
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
        height: 100%;
    }
    li{
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0px 10px;
        ::after{
            content: "";
            width: 0%;
            height: 4px;
            position: absolute;
            top: 90%;
            left: 0;
            background-color: var(--orange-1);
            transition: transform 0.2s;
        }
    }
    li:hover{
        background-color: var(--dark-1);
        a{
            color: var(--white);
        }
    }
    li:hover::after{
        animation: 0.5s liAnimation both;
    }
    @keyframes liAnimation {
        0% {width:0}
        100% {width:100%}
    }

`
export const Search = styled.section`
    display: flex;
    padding: 10px;
    background-color: var(--dark-1);
    border: 1px solid var(--dark-3);
    border-radius: 4px;
    box-sizing: border-box;
    img{
        width:24px;
        height: 24px;
    }
    :hover{
        background-color: var(--dark-2);
        input{
            background-color: var(--dark-2);

        }
    }
    input:hover{
    }
`
export const Infomations= styled.section`
    background-color: var(--black-1);
    display: flex;
    gap: 20px;
    img {
        width: 24px;
        height: 24px;
    }
    svg:hover{
        path{
            color: white;
        }
    }
`
