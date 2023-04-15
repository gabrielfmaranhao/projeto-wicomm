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
    left: ${({left}) => left}
`
