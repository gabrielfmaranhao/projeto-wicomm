import CardObjectives from "../CardObjectives"
import { ListObjetves } from "./style"

const ShowObjectives = () => {
    return(
        <ListObjetves>
            <CardObjectives image="/assets/biceps.png" objetives="GANHO DE MASSA"/>
            <CardObjectives image="/assets/unsplash_wXBK9JrM0iU.png" objetives="ENERGIA"/>
            <CardObjectives image="/assets/unsplash_eFx1KZhaSvo.png" objetives="RECUPERAÇÃO MUSCULAR"/>
            <CardObjectives image="/assets/unsplash_Z72YujnOrlY.png" objetives="EMAGRECIMENTO" />
        </ListObjetves>
    )
}
export default ShowObjectives
