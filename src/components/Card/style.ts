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
    position: relative;
    :hover{
        #hover{
            opacity: 1;
            animation: 0.5s hoverComponent both;
        }
    }
    @keyframes hoverComponent {
        0% {height:0%}
        100% {height:70%}
    }
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    /* position: relative; */
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
export const HoverComponent = styled.div`
    opacity: 0;
    width: 100%;
    height: 60%;
    position: absolute;
    background-color: var(--white);
    top: 42%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: center;
    }
    .comprar{
        letter-spacing: 0.08em;
    }
`
