import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    /* display: flex; */
`
export const ListShowCategories = styled.ul`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    padding: 0 70px;
    li {
        width: 178px;
        height: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        figure {
            width: 178px;
            height: 178px;
            border-radius: 50%;
            background-color: var(--gray-3);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img {
            position: absolute;
        }
    }
    li:hover{
        figure{
            background-color: var(--orange-1);
        }
        img{
            animation: 0.5s liCategorie both;
        }
    }
    @keyframes liCategorie{
        0% {scale:1}
        100% {scale:1.5}
    }
`
