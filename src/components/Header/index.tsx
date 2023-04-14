import { Container, Details, Nav, Search, Infomations } from "./style"
import Text from "../Text"
import truck from "../../assets/Truck.png"
import logo from "../../assets/black-skull.png"
import glass from "../../assets/MagnifyingGlass.png"
import cart from "../../assets/ShoppingCart.png"
import user from "../../assets/User.png"
import whish from "../../assets/Whishlist.png"
import Input from "../Input"
const Header = () => {
    return(
        <Container>
            <Details>
                <Text element="h3" font_style="normal" font_weight={700} font_family="Barlow" font_size={12} font_color="orange-1" line_height={14} description="FALE CONOSCO"/>
                <div>
                    <img src={truck} alt="Truck img"/>
                    <Text element="h3" font_color="gray-2" font_family="Barlow" font_style="normal" font_weight={500} font_size={10} line_height={12} description="FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL"/>
                </div>
                <Text element="h3" font_style="normal" font_weight={700} font_family="Barlow" font_size={12} font_color="orange-1" line_height={14} description="BLOG.BLACKSKULL"/>
            </Details>
            <Nav>
                <img src={logo} alt="Logo black-skull"/>
                <ul>
                    <li>
                        <Text element="a" href="#Categorias" description="CATEGORIAS" font_color="gray-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={16}/>
                    </li>
                    <li>
                        <Text element="a" href="#Vestuario" description="VESTUARIO" font_color="gray-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={16}/>
                    </li>
                    <li>
                        <Text element="a" href="#Objetivos" description="OBJETIVOS" font_color="gray-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={16}/>
                    </li>
                    <li>
                        <Text element="a" href="#Promocoes" description="PROMOÇÕES" font_color="gray-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={16}/>
                    </li>
                    <li>
                        <Text element="a" href="#Atletas" description="ATLETAS" font_color="gray-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={16}/>
                    </li>
                    <li>
                        <Text element="a" href="#Assinatura" description="ASSINATURA" font_color="gray-1" font_family="Barlow" font_style="normal" font_weight={700} font_size={14} line_height={16}/>
                    </li>
                </ul>
                <Search>
                    <Input border="none" background_color="dark-1" border_radius={4} color="white" padding="none" placeholder="Buscar"/>
                    <img src={glass} alt="MagnifyingGlass" />
                </Search>
                <Infomations>
                <img src={user} alt="MagnifyingGlass" />
                <img src={whish} alt="MagnifyingGlass" />
                <img src={cart} alt="MagnifyingGlass" />
                </Infomations>
            </Nav>
        </Container>
    )
}
export default Header
