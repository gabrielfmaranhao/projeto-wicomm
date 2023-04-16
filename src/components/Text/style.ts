import styled from "styled-components";
import { ITextProps } from "../../interfaces";

const TextStyle = styled.p`
    font-weight: ${({font_weight}:ITextProps) => font_weight};
    color: ${({font_color}:ITextProps) => `var(--${font_color})`};
    font-style: ${({font_style}:ITextProps) => font_style};
    font-size: ${({font_size}:ITextProps) => `${font_size}px`};
    font-family: ${({font_family}:ITextProps) => font_family};
    line-height: ${({line_height}) => `${line_height}px`};
    text-decoration: none;
`
export default TextStyle
