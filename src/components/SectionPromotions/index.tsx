import { Container } from "./style"
import Button from "../Button"
import Image from "../Image"
import Text from "../Text"
import ShowItens from "../ShowItens"
import { ListButtonBundle, ButtonBundle } from "../../style/global"
const SectionPromotions = () => {
    return(
        <Container id="Promocoes">
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="relative" top="270px" left="-570px">
                <Image src="src/assets/ArrowLight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="relative" top="220px" left="570px">
                <Image src="src/assets/ArrowRight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
            <Text element="h3" font_color="dark-1" font_family="Roboto Condensed" font_size={32} font_style="italic" font_weight={700} line_height={38} description="PROMOÇÕES"/>
            <ShowItens/>
            <ListButtonBundle position="relative" top="0px">
                <ButtonBundle/>
                <ButtonBundle/>
                <ButtonBundle/>
            </ListButtonBundle>
        </Container>
    )
}
export default SectionPromotions
