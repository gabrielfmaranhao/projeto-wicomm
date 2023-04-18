import { Container,ListCard, Card , SectionAbout} from "./style"
import Image from "../../../components/Image"
import Text from "../../../components/Text"
import Button from "../../../components/Button"
const About = () => {
    return(
    <Container>
        <ListCard>
            <Card>
                <main>
                    <Text font_family="Roboto Condensed" font_style="italic" font_weight={700} font_size={40} line_height={47} font_color="white" description="GARANTA O " element="h3"/>
                    <Text font_family="Roboto Condensed" font_style="italic" font_weight={700} font_size={40} line_height={47} font_color="orange-1" description="FRETE GRÁTIS" element="h3"/>
                    <Button padding="14px 24px" border_radius="4px" border="none" background_color="orange-1">
                        <Text font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={20} font_color="black-1" description="CONSULTE" element="span"/>
                    </Button>
                </main>
                <Image src="/assets/Package.png" alt="pacote"  width={180} hieght={180}/>
            </Card>
            <Card>
                <main>
                    <Text font_family="Roboto Condensed" font_style="italic" font_weight={700} font_size={40} line_height={47} font_color="white" description="SEU DINHEIRO" element="h3"/>
                    <Text font_family="Roboto Condensed" font_style="italic" font_weight={700} font_size={40} line_height={47} font_color="orange-1" description="DE VOLTA" element="h3"/>
                    <Button padding="14px 24px" border_radius="4px" border="none" background_color="orange-1">
                        <Text font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={20} font_color="black-1" description="ENTENDA" element="span"/>
                    </Button>
                </main>
                <Image src="/assets/CurrencyCircleDollar.png" alt="pacote"  width={180} hieght={180}/>
            </Card>
        </ListCard>
        <SectionAbout>
            <Image src="/assets/Group 2.png" width={160} hieght={160} opacity={0.1}/>
            <Text element="h3" font_family="Roboto Condensed" font_weight={700} font_style="italic" font_size={32} line_height={38} description="SOBRE A BLACK SKULL" font_color="dark-1"/>
            <Text element="p" font_family="Barlow" font_weight={400} font_size={16} font_style="normal" line_height={20} font_color="black-1" description="A Black Skull USA é uma marca de suplementos alimentares com foco em atletas de alta performance. Nossa sede no Brasil está alocada em Embu das Artes – SP, com mais de 12.000 m² de área construída, com alta capacidade produtiva. Nossos produtos trabalham com as melhores matérias-primas do mercado e tem como principal característica maior concentração de insumos, que proporcionam níveis de pureza mais altos e por consequência otimizam a qualidade de nossos produtos."/>
        </SectionAbout>
    </Container>
    )
}
export default About
