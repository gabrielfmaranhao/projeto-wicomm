import { ButtonStyle } from "./style"
import { IButtonProps } from "../../interfaces"
const Button = ({...rest}:IButtonProps) => {
    return(
        <ButtonStyle {...rest}/>
    )
}
export default Button
