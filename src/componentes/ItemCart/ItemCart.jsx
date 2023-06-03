import { useContext } from "react";
import deleteWhite from "../../img/deleteWhite.svg";
import  "./itemCart.css";
import { listCartContext } from "../ProviderContextCart/ProviderContextCart";

const ItemCart = ({id, title, price, quantity, image}) => {


    const { remove } = useContext(listCartContext);

    return (
        <div className="itemCart">
            <div className="img">
                <img src={image}></img>
            </div>

            <div className="description-cantidad">
                <span className="title"> {title} </span>
                <span className="quantity">{`cantidad: ${quantity}`}</span>
            </div> 

            <div className="price">
                <span className="subtotal">subtotal</span>
                <span className="precioo"> ${price * quantity} </span>
            </div>

            <button className="delete" onClick={ () => remove(id) }>
                <img src={deleteWhite}></img>
            </button>

        </div>
    )
}

export default ItemCart;