import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="nav">  
            <h1>Ecommerce</h1>
            <div >
            <button className="btn1"> Inicio </button>
            <button className="btn2">Productos</button>
            <button className="btn3">Contacto</button>
            </div>
            <CartWidget /> 
        </nav> 
    )
} 

export default NavBar