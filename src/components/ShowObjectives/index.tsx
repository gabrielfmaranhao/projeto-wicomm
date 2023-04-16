import CardObjectives from "../CardObjectives"
import { ListObjetves } from "./style"

const ShowObjectives = () => {
    return(
        <ListObjetves>
            <CardObjectives image="src/assets/biceps.png" text="GANHO DE MASSA"/>
            <CardObjectives image="src/assets/unsplash_wXBK9JrM0iU.png" text="ENERGIA"/>
            <CardObjectives image="src/assets/unsplash_eFx1KZhaSvo.png" text="RECUPERAÇÃO MUSCULAR"/>
            <CardObjectives image="src/assets/unsplash_Z72YujnOrlY.png" text="EMAGRECIMENTO" />
        </ListObjetves>
    )
}
export default ShowObjectives
