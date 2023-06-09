import styled from "styled-components";
import { IButtonProps } from "../../interfaces";
export const ButtonStyle = styled.button`
    background-color: ${({background_color}:IButtonProps) =>`var(--${background_color})`};
    border: ${({border}:IButtonProps) => border};
    border-radius: ${({border_radius}:IButtonProps) => border_radius};
    padding: ${({padding}:IButtonProps) => padding};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: ${({position}:IButtonProps) => position};
    top: ${({top}:IButtonProps) => top};
    left: ${({left}:IButtonProps) => left};
    width: ${({whidth}:IButtonProps) => whidth};
    height: ${({heigth}:IButtonProps) => heigth};
    :hover{
        background-color: ${({background_color_hover}:IButtonProps) => background_color_hover};
        border-color: ${({border_color_hover}:IButtonProps) => border_color_hover};
    }
`
