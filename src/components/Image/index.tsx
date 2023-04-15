import { IImageProps } from "../../interfaces"
import { Container } from "./style"
const Image = ({...rest}:IImageProps) => {
    return(
        <Container {...rest}/>
    )
}
export default Image
