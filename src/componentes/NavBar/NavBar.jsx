import Brand from "../Brand/Brand";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"
import ContainerCart from "../ContainerCart/ContainerCart";
import ContextCart from "../ContextCart/ContextCart";


const NavBar = () => {
    return (
        <ContextCart>
            <header> 
                <div className="containerBrand">
                    <Brand />
                </div>

                <nav className="containerItemList">
                    <ItemListContainer 
                        itemCero= "Inicio"
                        itemUno = "Mesas"
                        itemDos = "Roperos"
                        itemTres = "Sillas"
                        itemCuatro = "Sofa/Sillones"
                    />
                </nav>
            
                <div className="containerCart">
                    <CartWidget />
                </div>

                <ContainerCart />
            </header> 
        </ContextCart>
    )
} 

export default NavBar;