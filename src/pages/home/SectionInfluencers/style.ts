import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: var(--black-1);
    background-image: url('src/assets/unsplash_4aVUigDCLV8.png');
    height: 461px;
    mix-blend-mode: hard-light;
    display: flex;
    justify-content: flex-end;
    position: relative;
    section {
        display: flex;
        gap: 20px;
    }
`
export const Main = styled.main`
    position: absolute;
    top: 60px;
    left: 185px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        display: flex;
        gap: 5px;
    }
`
