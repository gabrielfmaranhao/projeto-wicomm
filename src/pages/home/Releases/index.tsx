import { Container } from "./style"
import { ListButtonBundle, ButtonBundle } from "../../../style/global"
import Text from "../../../components/Text"
import ShowItens from "../../../components/ShowItens"
import Button from "../../../components/Button"
import Image from "../../../components/Image"
const Releases = () => {
    return(
        <Container>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="relative" top="270px" left="-570px">
                <Image src="/assets/ArrowLight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="relative" top="220px" left="570px">
                <Image src="/assets/ArrowRight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
            <Text element="h3" font_color="dark-1" font_family="Roboto Condensed" font_size={32} font_style="italic" font_weight={700} line_height={38} description="LANÇAMENTOS"/>
            <ShowItens/>
            <ListButtonBundle position="relative" top="0px">
                <ButtonBundle/>
                <ButtonBundle/>
                <ButtonBundle/>
            </ListButtonBundle>
        </Container>
    )
}
export default Releases
