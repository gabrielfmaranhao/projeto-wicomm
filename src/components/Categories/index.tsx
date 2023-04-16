import Button from "../Button"
import Image from "../Image"
import Text from "../Text"
import { Container, ListShowCategories} from "./style"
const Categories = () => {
    return(
        <Container id="Categorias">
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="relative" top="120px" left="54px">
                <Image src="src/assets/ArrowLight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
            <ListShowCategories>
                <li>
                    <figure>
                        <Image width={108} hieght={108} src="src/assets/image 2.png"/>
                    </figure>
                    <Text element="strong" font_color="dark-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={12} line_height={16} description="PROTEÍNAS"/>
                </li>
                <li>
                    <figure>
                        <Image width={108} hieght={108} src="src/assets/image 2.png"/>
                    </figure>
                    <Text element="strong" font_color="dark-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={12} line_height={16} description="HIPERCALÓRICO"/>
                </li>
                <li>
                    <figure>
                        <Image width={108} hieght={108} src="src/assets/image 2.png"/>
                    </figure>
                    <Text element="strong" font_color="dark-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={12} line_height={16} description="CREATINA"/>
                </li>
                <li>
                    <figure>
                        <Image width={108} hieght={108} src="src/assets/image 2.png"/>
                    </figure>
                    <Text element="strong" font_color="dark-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={12} line_height={16} description="PACKS"/>
                </li>
                <li>
                    <figure>
                        <Image width={108} hieght={108} src="src/assets/image 2.png"/>
                    </figure>
                    <Text element="strong" font_color="dark-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={12} line_height={16} description="AMINOÁCIDOS"/>
                </li>
                <li>
                    <figure>
                        <Image width={108} hieght={108} src="src/assets/image 2.png"/>
                    </figure>
                    <Text element="strong" font_color="dark-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={12} line_height={16} description="SAÚDE"/>
                </li>
            </ListShowCategories>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="relative" top="-140px"left="1200px">
                <Image src="src/assets/ArrowRight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
        </Container>
    )
}
export default Categories