import { Container, Main, Icons, HoverComponent } from "./style";
import Image from "../Image";
import Text from "../Text";
import Button from "../Button";

const Card = () => {
    return(
        <Container>
            <HoverComponent id="hover">
                    <Text description="SABOR" element="h3" font_color="dark-1" font_style="normal" font_weight={700} font_size={16} font_family="Barlow"/>
                <div>
                    <Button padding="14px 24px" border="1px solid var(--gray-1)" border_radius="4px" background_color_hover="var(--gray-3)" border_color_hover="var(--black-1)">
                        <Text element="span" description="TOFFEE" font_family="Barlow" font_style="normal" font_color="gray-1" font_weight={700} line_height={20}/>
                    </Button>
                    <Button padding="14px 24px" border="1px solid var(--gray-1)" border_radius="4px" background_color_hover="var(--gray-3)" border_color_hover="var(--black-1)">
                        <Text element="span" description="TOFFEE" font_family="Barlow" font_style="normal" font_color="gray-1" font_weight={700} line_height={20}/>
                    </Button >
                    <Button padding="14px 24px" border="1px solid var(--gray-1)" border_radius="4px" background_color_hover="var(--gray-3)" border_color_hover="var(--black-1)">
                        <Text element="span" description="TOFFEE" font_family="Barlow" font_style="normal" font_color="gray-1" font_weight={700} line_height={20}/>
                    </Button>
                    <Button padding="14px 24px" border="1px solid var(--gray-1)" border_radius="4px" background_color_hover="var(--gray-3)" border_color_hover="var(--black-1)">
                        <Text element="span" description="TOFFEE" font_family="Barlow" font_style="normal" font_color="gray-1" font_weight={700} line_height={20}/>
                    </Button>
                </div>
                <Button padding="14px 24px" border="1px solid var(--orange-1)" border_radius="4px" background_color_hover="var(--orange-2)" border_color_hover="var(--black-1)" whidth="100%" background_color="orange-1">
                    <Text element="span" description="COMPRAR" font_family="Barlow" font_style="normal" font_color="BLACK-1" font_weight={700} line_height={20} className="comprar"/>
                </Button>
            </HoverComponent>
            <Image src="/assets/image 1.png" width={165} hieght={165}/>
            <Main>
                <Text description="WHEY ZERO (COM LACTASE) BLACK SKULL - 900G" element="h4" font_color="black-1" font_family="Barlow" font_size={12} font_weight={600} font_style="normal" line_height={16} />
                <Text description="R$ 349,90" element="strong" font_color="orange-1" font_family="Barlow" font_size={22} font_weight={700} font_style="normal" line_height={26}/>
                <Text description="ou 12x de R$ 29,16" element="p" font_color="dark-3" font_family="Barlow" font_size={14} font_weight={400} font_style="normal" line_height={17}/>
            </Main>
            <Icons>
                <Image src="/assets/Whishlist Vitrine.png" width={24} hieght={24} />
                <Image src="/assets/ShoppingCartVitrine.png"width={24} hieght={24}/>
            </Icons>
        </Container>
    )
}
export default Card
