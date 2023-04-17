import Header from "./Header"
import { DivSpace } from "./style"
import Bundle from "./Bundle"
import Categories from "./Categories"
import Releases from "./Releases"
import SectionInfluencers from "./SectionInfluencers"
import SectionObjectives from "./SectionObjectives"
import SectionPromotions from "./SectionPromotions"
import SectionBlog from "./SectionBlog"
import About from "./About"
import Button from "../../components/Button"
import Text from "../../components/Text"
import Footer from "./Footer"
const Home = () => {
    return(
        <>
            <Button background_color="dark-3" border="1px solid var(--gray-1)" border_radius={"4px"} id="arrow_up" background_color_hover="var(--orange-1)"  border_color_hover="var(--black-1)">
                <img src="src/assets/CaretUp.png" alt="Up arrow"/>
            </Button>
            <Button background_color="orange-1" border="1px solid var(--dark-3)" border_radius={"6px 6px 0px 6px"} id="talk_to_me" background_color_hover="var(--orange-2)">
                <img src="src/assets/ChatDots.png" alt="chat" />
                <Text element="p" description="Fale Conosco" font_family="Barlow" font_style="normal" font_size={14} line_height={20} font_weight={700} font_color="black-1"/>
            </Button>
            <Header/>
            <DivSpace/>
            <Bundle/>
            <Categories/>
            <Releases/>
            <SectionInfluencers/>
            <SectionPromotions/>
            <SectionBlog/>
            <SectionObjectives/>
            <About/>
            <Footer/>
        </>
    )
}
export default Home
