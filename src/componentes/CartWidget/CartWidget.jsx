import { useContext } from "react";
import cart from  "../../img/carrito-de-compras.png";
import "./cardwidget.css"
import { listCartContext } from "../ProviderContextCart/ProviderContextCart";
import { constrollerShowCart } from "../ContextCart/ContextCart";

const CartWidget = () => {

    const { cartShow, setCartShow } = useContext(constrollerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return (
            <div className="containerLength" onClick={showCart}>
                <img  src={cart} alt="cart"></img>
                <span className="cantCart">
                    {listCart.length}
                </span>
            </div>
    )
}

export default CartWidget;