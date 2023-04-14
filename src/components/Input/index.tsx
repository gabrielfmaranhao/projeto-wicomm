import { IInputProps } from "../../interfaces"
import { InputStyle } from "./style"
const Input = ({...rest}:IInputProps) => {
    return(
        <InputStyle {...rest}/>
    )
}
export default Input
