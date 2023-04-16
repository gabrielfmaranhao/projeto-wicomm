import { Container, Main, Icons } from "./style";
import Image from "../Image";
import Text from "../Text";

const Card = () => {
    return(
        <Container>
            <Image src="src/assets/image 1.png" width={165} hieght={165}/>
            <Main>
                <Text description="WHEY ZERO (COM LACTASE) BLACK SKULL - 900G" element="h4" font_color="black-1" font_family="Barlow" font_size={12} font_weight={600} font_style="normal" line_height={16} />
                <Text description="R$ 349,90" element="strong" font_color="orange-1" font_family="Barlow" font_size={22} font_weight={700} font_style="normal" line_height={26}/>
                <Text description="ou 12x de R$ 29,16" element="p" font_color="dark-3" font_family="Barlow" font_size={14} font_weight={400} font_style="normal" line_height={17}/>
            </Main>
            <Icons>
                <Image src="src/assets/Whishlist Vitrine.png" width={24} hieght={24} />
                <Image src="src/assets/ShoppingCartVitrine.png"width={24} hieght={24}/>
            </Icons>
        </Container>
    )
}
export default Card
