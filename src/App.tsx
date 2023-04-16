import Button from "./components/Button"
import Header from "./components/Header"
import GlobalStyle from "./style/global"
import caretUp from "./assets/CaretUp.png"
import chat from "./assets/ChatDots.png"
import Text from "./components/Text"
import Bundle from "./components/Bundle"
import Categories from "./components/Categories"
import Releases from "./components/Releases"
const App = () => {
  return (
    <>
      <Button background_color="dark-3" border="1px solid var(--gray-1)" border_radius={"4px"} id="arrow_up">
        <img src={caretUp} alt="Up arrow"/>
      </Button>
      <Button background_color="orange-1" border="1px solid var(--dark-3)" border_radius={"6px 6px 0px 6px"} id="talk_to_me">
        <img src={chat} alt="chat" />
        <Text element="p" description="Fale Conosco" font_family="Barlow" font_style="normal" font_size={14} line_height={20} font_weight={700} font_color="black-1"/>
      </Button>
      <Header/>
      <Bundle/>
      <Categories/>
      <Releases/>
      <GlobalStyle/>
    </>
  )
}

export default App
