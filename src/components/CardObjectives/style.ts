import styled from "styled-components";
import { ICardObjectivesProps } from "../../interfaces";
export const Container = styled.li`
    background: linear-gradient(180deg, rgba(11, 11, 11, 0) 67.94%, #0B0B0B 100%), ${({image}:ICardObjectivesProps) => `url(${image})`};
    width:277px;
    height: 340px;
    background-position: center;
    /* filter: grayscale(100%); */
    display: flex;
    align-items: flex-end;
    position: relative;
    div{
        display:flex;
        width: 212px;
        height: 40px;
        background-color: var(--orange-1);
        padding-left: 16px;
        align-items: center;
        justify-content: space-between;
        transform: skew(-22deg);
        position: relative;
    }
    ::after{
        content: "";
        width: 10px;
        background-color: white;
        height: 20px;
        position: absolute;
        top: 320px;
        left: -10px;
    }
    ::before{
        content: "";
        width: 10px;
        background-color: var(--orange-1);
        height: 20px;
        position: absolute;
        top: 300px;
        left: 0px;
    }
`
