import "./containerCart.css";
import clear from "../../img/clear.svg";
import ItemCart from "../ItemCart/ItemCart";
import { useContext } from "react";
import { listCartContext } from "../../componentes/ProviderContextCart/ProviderContextCart"

const ContainerCart = () => {
    const {listCart, clearCart} = useContext(listCartContext);
    return( 
        <div className="cart">
            
            <div className="cerrar">
                <button className="close">
                    <span>❌</span>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0) ? <span className="emptyCart">Tu Carrito esta vacio !!</span>
                    : listCart.map( product => (
                        <ItemCart
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))
                }
            </div>

            <div className="terminarCompra"> 
                <button className="terminar">Terminar Compra</button>

                <button className="clear">
                    <img src={clear} alt=""></img>
                </button>
            </div>
        </div>
    )
}

export default ContainerCart;