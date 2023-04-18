import { Container, Details, Nav, Search, Infomations } from "./style"
import Text from "../../../components/Text"
import Input from "../../../components/Input"
import {BiUserCircle,BiStar} from "react-icons/bi"
import {HiOutlineShoppingCart} from "react-icons/hi"
const Header = () => {
    return(
        <Container>
            <Details>
                <Text element="h3" font_style="normal" font_weight={700} font_family="Barlow" font_size={12} font_color="orange-1" line_height={14} description="FALE CONOSCO"/>
                <div>
                    <img src='/assets/Truck.png' alt="Truck img"/>
                    <Text element="h3" font_color="gray-2" font_family="Barlow" font_style="normal" font_weight={500} font_size={10} line_height={12} description="FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL"/>
                </div>
                <Text element="h3" font_style="normal" font_weight={700} font_family="Barlow" font_size={12} font_color="orange-1" line_height={14} description="BLOG.BLACKSKULL"/>
            </Details>
            <Nav>
                <img src="/assets/black-skull.png" alt="Logo black-skull"/>
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
                    <img src="/assets/MagnifyingGlass.png" alt="MagnifyingGlass" />
                </Search>
                <Infomations>
                    <BiUserCircle size={24} color="var(--gray-1)"/>
                    <BiStar size={24} color="var(--gray-1)"/>
                    <HiOutlineShoppingCart size={24} color="var(--gray-1)"/>
                </Infomations>
            </Nav>
        </Container>
    )
}
export default Header
