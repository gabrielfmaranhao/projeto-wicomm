import TextStyle from "./style"
import { ITextProps } from "../../interfaces"

const Text = ({element,description, ...rest}:ITextProps) => {
    return(
        <TextStyle as={element} {...rest}>
            {description}
        </TextStyle>
    )
}
export default Text
