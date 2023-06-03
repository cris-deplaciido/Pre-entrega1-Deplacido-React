import Image from "../Imagen/Image";
import "./cardItem.css"
import Description from "../Description/Description";
import ButtonDetails from "../ButtonDetails/ButtonDetails";
import ButtonAddCart from "../ButtonAddCart/ButtonAddCart";
import { Link } from "react-router-dom";
import cart from "../../img/carrito-de-compras.png";

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
            <Link to={ `/item/${props.id}`}>
                <ButtonDetails 
                    txt="Ver detalles"
                />
            </Link>

                <ButtonAddCart 
                    id={props.id}
                    svg={cart}
                />
            </div>
        </div>
    )
}

export default CardItem;