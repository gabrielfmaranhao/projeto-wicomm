import ShowObjectives from "../ShowObjectives"
import { Container } from "./style"
import Text from "../Text"
const SectionObjectives = () => {
    return(

        <Container id="Objetivos">
            <Text element="h3" font_color="dark-1" font_family="Roboto Condensed" font_size={32} font_style="italic" font_weight={700} line_height={38} description="OBJETIVOS"/>
            <ShowObjectives/>
        </Container>
    )
}
export default SectionObjectives
