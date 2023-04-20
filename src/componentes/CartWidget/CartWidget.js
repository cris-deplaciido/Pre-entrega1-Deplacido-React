import cart from './assets/carrito-de-compras.png';
import './cardwidget.css';


const CartWidget = () => {
    return (
        <div className='cartwidget'>

            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget