import styled from "styled-components";
import { IImageProps } from "../../interfaces";
export const Container = styled.img`
    width: ${({width}:IImageProps) => `${width}px`};
    height ${({hieght}:IImageProps) => `${hieght}px`};
    mix-blend-mode: ${({mix_blend_mode}:IImageProps) => mix_blend_mode};
    opacity: ${({opacity}:IImageProps) => opacity};
`
