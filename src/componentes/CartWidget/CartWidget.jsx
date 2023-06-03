import { useContext } from "react";
import cart from  "../../img/carrito-de-compras.png";
import "./cardwidget.css"
import { listCartContext } from "../ProviderContextCart/ProviderContextCart";

const CartWidget = () => {

    const { listCart } = useContext(listCartContext)

    return (
    
            <div className="containerLength">
                
                <img  src={cart} alt="cart"></img>
                <span className="cantCart">
                    {listCart.length}
                </span>
            </div>

        
    )
}

export default CartWidget;