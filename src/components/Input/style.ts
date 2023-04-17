import styled from "styled-components";
import { IInputProps } from "../../interfaces";


export const InputStyle = styled.input`
    background-color: ${({background_color}:IInputProps) => `var(--${background_color})`};
    color: ${({color}:IInputProps) => `var(--${color})`};
    border: ${({border}:IInputProps) => border};
    border-radius: ${({border_radius}:IInputProps) => `${border_radius}px`};
    padding: ${({padding}:IInputProps) => padding};
    outline: none;
    transition: 0.2 background-color;
    ::placeholder{
        color: var(--gray-1);
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
    }
    /* :hover{
        background-color: red;
    } */
`
