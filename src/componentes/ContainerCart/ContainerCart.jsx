import "./containerCart.css";
import ItemCart from "../ItemCart/ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { listCartContext } from "../../componentes/ProviderContextCart/ProviderContextCart"
import { constrollerShowCart } from "../ContextCart/ContextCart";

const ContainerCart = () => {
    
    const { listCart, clearCart } = useContext(listCartContext);
    const { cartShow, setCartShow } = useContext(constrollerShowCart)

    const style = {
        display: cartShow 
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return( 
        <div className="cart" style={style}>
            
            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <span>❌</span>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0 ) ? <span className="emptyCart">Tu Carrito esta vacio 😅 !!</span>
                    : listCart.map( producto => (
                        <ItemCart
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            image={producto.imageProduct.firtsImage}
                            quantity={producto.quantity}
                            price={producto.price}
                        />
                    ))
                }
            </div>

            <div className="terminarCompra"> 
                <button className="terminar">Terminar Compra</button>

                <button className="clear" onClick={clearCart}>
                    <img src={clear} alt=""></img>
                </button>
            </div>
        </div>
    )
}

export default ContainerCart;