import Image from "../../../components/Image"
import { Container, Details, Form, Informations, Main, Section } from "./style"
import Text from "../../../components/Text"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
const Footer = () => {
    return(
        <Container>
            <Main>
                <Informations>
                    <section className="social">
                        <Image src="src/assets/black-skull.png" width={213.37} height={40.83}/>
                        <div className="social_div">
                            <Text element="h4" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} line_height={17} font_color="white" description="Nos siga:"/>
                            <div className="icons_social">
                                <Image src="src/assets/facebook.png" width={24} height={24}/>
                                <Image width={24} height={24} src="src/assets/instagram.png"/>
                                <Image width={24} height={24} src="src/assets/youtube.png"/>
                                <Image width={24} height={24} src="src/assets/twitter.png"/>
                                <Image width={24} height={24} src="src/assets/tiktok.png"/>
                            </div>
                        </div>
                    </section>
                    <section className="informations">
                        <Section>
                            <Text element="h3" font_family="Barlow" font_style="normal" font_weight={700} font_size={16} line_height={19} font_color="white" description="BLACKSKULL USA"/>
                            <Text element="a" href="#about" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Sobre Nós"/>
                            <Text element="a" href="#reliable" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Black Skull é confiável?"/>
                            <Text element="a" href="#athletes" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Atletas Black Skull"/>
                            <Text element="a" href="#blog" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Nosso Blog"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Seja um Revendedor"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Entre em Contato"/>
                        </Section>
                        <Section>
                            <Text element="h3" font_family="Barlow" font_style="normal" font_weight={700} font_size={16} line_height={19} font_color="white" description="INSTITUCIONAL"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Trocas e Devoluções"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Política de Entregas"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Política de Privacidade"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Política de Cancelamentos"/>
                        </Section>
                        <Section>
                            <Text element="h3" font_family="Barlow" font_style="normal" font_weight={700} font_size={16} line_height={19} font_color="white" description="AFILIADOS"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Programa de Afiliados"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Desconto para Militares"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Benefícios para
Profissionais da Saúde" className="text"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Benefícios para
Profs. de Educação Física" className="text"/>
                            <Text element="a" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17} description="Assinaturas"/>
                        </Section>
                        <Section>
                            <Text element="h3" font_family="Barlow" font_style="normal" font_weight={700} font_size={16} line_height={19} font_color="white" description="FORMAS DE PAGAMENTO"/>
                            <Image src="src/assets/Group 159.png"/>
                        </Section>
                        <Section>
                            <Text element="h3" font_family="Barlow" font_style="normal" font_weight={700} font_size={16} line_height={19} font_color="white" description="SEGURANÇA"/>
                            <div>
                                <Image src="src/assets/image 8.png"/>
                                <Image src="src/assets/image 6.png"/>
                            </div>
                        </Section>
                    </section>
                </Informations>
                <Form>
                    <div>
                        <Text description="FIQUE POR" element="h3"  font_color="white" font_family="Roboto Condensed" font_style="italic" font_weight={700} font_size={32} line_height={38}/>
                        <Text description="DENTRO" element="h3"  font_color="orange-1" font_family="Roboto Condensed" font_style="italic" font_weight={700} font_size={32} line_height={38}/>
                    </div>
                    <Text description="Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e muito mais!" element="p" font_family="Barlow" font_style="normal" font_weight={400} font_size={14} font_color="gray-1" line_height={17}/>
                    <div className="input">
                        <Input padding="20px 16px" background_color="dark-1" border="1px solid var(--dark-3)" border_radius={4} color="gray-1" placeholder="Digite seu e-mail"/>
                        <Input padding="20px 16px" background_color="dark-1" border="1px solid var(--dark-3)" border_radius={4} color="gray-1" placeholder="Digite seu nome"/>
                    </div>
                    <Button padding="14px 24px" background_color="orange-1" border_radius="4px" border="none" whidth="138px" heigth="40px" position="absolute" top="380px" left="130px">
                        <Text element="span" font_family="Barlow" font_color="black-1" font_style="normal" font_weight={700} font_size={14} line_height={20} description="ENVIAR" id="enviar"/>
                    </Button>
                </Form>
            </Main>
            <Details>
                <Text element="h4" font_color="white" font_family="Barlow" font_size={16} font_style="normal" font_weight={400} line_height={19} description="Black Skull 2022. Todos os direitos reservados."/>
                <div>
                    <Image src="src/assets/Logo_Wicomm_WhiteBlue 1.png"/>
                    <Image src="src/assets/VTEX_pink_RGB.png"/>
                </div>
            </Details>
        </Container>
    )
}
export default Footer
