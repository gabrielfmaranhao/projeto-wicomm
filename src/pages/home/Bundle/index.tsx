import { Container,Main} from "./style"
import { ListButtonBundle, ButtonBundle } from "../../../style/global"
import Text from "../../../components/Text"
import Button from "../../../components/Button"
const Bundle = () =>{
    return(
        <Container>
            <Main>
                <Text element="h1" font_color="white" font_family="Roboto Condensed" font_style="italic" font_size={56} line_height={66} font_weight={700} description="AJUDANDO VOCÊ A TER"/>
                <Text element="h1" font_color="orange-1" font_family="Roboto Condensed" font_style="italic" font_size={56} line_height={66} font_weight={700} description="MAIS PERFFOMANCE"/>
                <Text element="p" font_color="white" font_family="Barlow" font_style="normal" font_size={16} line_height={20} font_weight={400} id="paragraph_bundle" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"/>
                <Button background_color="orange-1" border_radius="4px" border="none" color="dark-1" padding="14px 24px">
                    <Text element="p" font_color="black-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={16} line_height={20} description="CONFIRA" id="check_out"/>
                </Button>
            </Main>
            <ListButtonBundle position="relative" top="500px">
                <li><ButtonBundle/></li>
                <li><ButtonBundle/></li>
                <li><ButtonBundle/></li>
            </ListButtonBundle>
        </Container>
    )
}
export default Bundle
