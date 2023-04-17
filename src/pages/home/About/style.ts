import styled from "styled-components";


export  const Container = styled.section`
    width: 100%;
`
export const ListCard = styled.ul`
    display: flex;
    padding: 0px 155px;
    justify-content: space-between;
`
export const Card = styled.li`
    width: 435px;
    height: 240px;
    background: linear-gradient(213.8deg, #9A9A9A -17.86%, #0B0B0B 73%);
    padding: 20px;
    button {
        margin-top: 24px;
    }
    position: relative;
    img{
        position: absolute;
        top: 80px;
        left: 275px;
    }
`
export const SectionAbout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 64px;
    p{
        text-align: center;
        width: 640px;
    }
    h3{
        position: absolute;
        top: 90px;
    }
    img {
        opacity: 0.1;
    }
`

