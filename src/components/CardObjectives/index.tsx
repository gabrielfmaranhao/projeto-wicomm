import { ICardObjectivesProps } from "../../interfaces"
import { Container } from "./style"
import Text from "../Text"
const CardObjectives = ({text,...rest}:ICardObjectivesProps) => {
    return(
        <Container {...rest}>
            <div>
                <Text description={text} element="h4" font_family="Barlow" font_color="black-1" font_size={14} font_style="normal" font_weight={700} line_height={16}/>
            </div>
        </Container>
    )
}
export default CardObjectives
