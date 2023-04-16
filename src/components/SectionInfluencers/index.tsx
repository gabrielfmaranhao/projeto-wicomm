import { Container, Main } from "./style"
import Text from "../Text"
import Image from "../Image"
import Button from "../Button"
const SectionInfluencers = () => {
    return(
        <Container>
            <Image src="src/assets/Frame 17.png" width={483} hieght={314} mix_blend_mode="overlay" opacity={0.6}/>
            <Main>
                <div>
                    <Text element="h3" font_family="Roboto Condensed" font_weight={700} font_size={40} font_style="italic" line_height={47} font_color="white" description="CONHEÇA A TROPA"/>
                    <Text element="h3" font_family="Roboto Condensed" font_weight={700} font_size={40} font_style="italic" line_height={47} font_color="orange-1" description="BLACK SKULL"/>
                </div>
                <section>
                    <Image src="src/assets/Rectangle 38.png" alt="Cedric Mcmillan"/>
                    <Image src="src/assets/Rectangle 39.png" alt="Cedric Mcmillan"/>
                    <Image src="src/assets/Rectangle 40.png" alt="Cedric Mcmillan"/>
                </section>
            </Main>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="absolute" top="50%" left="10%">
                <Image src="src/assets/ArrowLight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="absolute" top="50%" left="86%">
                <Image src="src/assets/ArrowRight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
        </Container>
    )
}
export default SectionInfluencers
