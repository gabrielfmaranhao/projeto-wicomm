import { Container, Aside, Main, Card } from "./style"
import Text from "../Text"
import Button from "../Button"
import Image from "../Image"
const SectionBlog = () => {
    return(
        <Container>
            <Aside>
                <div>
                    <Text element="h3" font_family="Roboto Condensed" font_weight={700} font_size={40} font_style="italic" line_height={47} font_color="white" description="CONFIRA O"/>
                    <Text element="h3" font_family="Roboto Condensed" font_weight={700} font_size={40} font_style="italic" line_height={47} font_color="orange-1" description="NOSSO BLOG"/>
                </div>
                <Button background_color="orange-1" border="none" border_radius="4px" padding="14px 24px">
                    <Text element="p" font_color="black-1" font_family="Barlow" font_style="normal" font_weight={700} line_height={20} description="LEIA TODOS"/>
                </Button>
            </Aside>
            <Main>
                <ul>
                    <Card>
                        <Image src="src/assets/unsplash_WvDYdXDzkhs.png" alt="atleta levantando peso" width={374} hieght={200}/>
                        <main>
                            <Text element="span" font_family="Barlow" font_color="gray-2" font_size={14} font_style="normal" font_weight={400} line_height={17} description="03.05.21"/>
                            <Text element="p" font_family="Barlow" font_color="white" font_size={18} font_style="normal" font_weight={700} line_height={22} description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT"/>
                            <Button background_color="orange-1" border="none" border_radius="4px" padding="14px 24px">
                                <Text element="p" font_color="black-1" font_family="Barlow" font_style="normal" font_weight={700} line_height={20} description="LEIA MAIS"/>
                            </Button>
                        </main>
                    </Card>
                    <Card>
                        <Image src="src/assets/unsplash_0ShTs8iPY28.png" alt="atleta levantando peso" width={374} hieght={200}/>
                        <main>
                            <Text element="span" font_family="Barlow" font_color="gray-2" font_size={14} font_style="normal" font_weight={400} line_height={17} description="03.05.21"/>
                            <Text element="p" font_family="Barlow" font_color="white" font_size={18} font_style="normal" font_weight={700} line_height={22} description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT"/>
                            <Button background_color="orange-1" border="none" border_radius="4px" padding="14px 24px">
                                <Text element="p" font_color="black-1" font_family="Barlow" font_style="normal" font_weight={700} line_height={20} description="LEIA MAIS"/>
                            </Button>
                        </main>
                    </Card>
                    <Card>
                        <Image src="src/assets/unsplash_0Wra5YYVQJE.png" alt="atleta levantando peso" width={374} hieght={200}/>
                        <main>
                            <Text element="span" font_family="Barlow" font_color="gray-2" font_size={14} font_style="normal" font_weight={400} line_height={17} description="03.05.21"/>
                            <Text element="p" font_family="Barlow" font_color="white" font_size={18} font_style="normal" font_weight={700} line_height={22} description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT"/>
                            <Button background_color="orange-1" border="none" border_radius="4px" padding="14px 24px">
                                <Text element="p" font_color="black-1" font_family="Barlow" font_style="normal" font_weight={700} line_height={20} description="LEIA MAIS"/>
                            </Button>
                        </main>
                    </Card>
                </ul>
            </Main>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="absolute" top="50%" left="40px">
                <Image src="src/assets/ArrowLight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
            <Button background_color="gray-2" border_radius="4px" border="none" padding="3px" position="absolute" top="50%" left="1195px">
                <Image src="src/assets/ArrowRight.png" alt="arrow light" width={24} hieght={24}/>
            </Button>
        </Container>
    )
}
export default SectionBlog
