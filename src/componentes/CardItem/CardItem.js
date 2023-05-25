import Image from "../Imagen/Image";
import "./cardItem.css"
import Description from "../Description/Description";
import ButtonDetails from "../ButtonDetails/ButtonDetails";
import ButtonAddCart from "../ButtonAddCart/ButtonAddCart";
import ImgPrueba from "../../img/post10b.webp";

const CardItem = (props)  => {
    return (
        <div className="cardItem">
            <Image 
                imagen={props.imagen}
                />
            <Description 
            title= {props.title}
            cantidad= {props.cantidad}
            precio= {props.precio} 
            />
            <div className="buttons">
                <ButtonDetails />
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default CardItem;