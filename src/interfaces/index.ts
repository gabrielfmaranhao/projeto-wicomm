import { HtmlHTMLAttributes, InputHTMLAttributes } from "react"


export interface ITextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    font_color?: string
    font_family?: 'Barlow' | 'Roboto Condensed'
    font_weight?: number
    font_style?: string
    font_size?: number
    line_height?: number
    description?: string
    element: string
    href?: string
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    border?: string
    border_radius?: number
    background_color?: string
    color?: string
    padding?: string
}