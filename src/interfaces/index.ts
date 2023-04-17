import { HtmlHTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, ImgHTMLAttributes, LiHTMLAttributes} from "react"


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

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    border?: string
    border_radius?: string
    background_color?: string
    background_color_hover?: string
    padding?: string
    position?: string
    top?: string
    left?: string
    whidth?: string
    heigth?: string
    border_color_hover?: string
}
export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    width?: number
    hieght?: number
    mix_blend_mode?: string
    opacity?:number
}
export interface IListButtonBundle {
    left?: string
    top?: string
    position?: string
}
export interface ICardObjectivesProps extends LiHTMLAttributes<HTMLLIElement> {
    image: string
    text: string
}
