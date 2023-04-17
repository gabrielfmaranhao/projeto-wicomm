import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 588px;
    background-color:var(--black-1);
    margin-top: 80px;
`
export const Main = styled.main`
    display: flex;
    height: 500px;
`
export const Informations = styled.section`
    display: flex;
    padding: 40px 0px 0px 56px;
    gap: 54px;
    .social{
        width: 245px;
        height: 161px;
        display: flex;
        flex-direction: column;
        gap: 48px;
        align-items: center;
    }
    .social_div{
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }
    .icons_social {
        display: flex;
        gap: 20px;
    }
    .informations{
        display: flex;
        gap: 44px;
        flex-wrap: wrap;
        align-content: flex-start;
    }
`
export const Section = styled.section`
        display: flex;
        flex-direction: column;
        gap: 14px;
        div {
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }
        .text{
            width: 165px;
        }
`
export const Form = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 40px 33px;
    border-left: 1px solid var(--dark-3);
    gap: 32px;
    position: relative;
    .input{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    #enviar{
        letter-spacing: 0.08em;
    }

`
export const Details = styled.section`
    display: flex;
    padding: 0px 56px;
    border-top: 1px solid var(--dark-3);
    height: 87px;
    align-items: center;
    justify-content: space-between;
    div {
        display: flex;
        gap: 40px;
    }
`
