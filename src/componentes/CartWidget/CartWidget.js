import cart from  "../../img/carrito-de-compras.png";
import "./cardwidget.css"



const CartWidget = () => {
    return (
    
            <div className="containerLength">
                
                <img className="" src={cart} alt="cart"></img>
                <span>
                    1
                </span>
            </div>

        
    )
}

export default CartWidget;