import styled from "styled-components";
import { IImageProps } from "../../interfaces";
export const Container = styled.img`
    width: ${({width}:IImageProps) => `${width}px`};
    height ${({hieght}:IImageProps) => `${hieght}px`};
`
