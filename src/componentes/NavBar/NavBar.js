import Brand from "../Brand/Brand";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"


const NavBar = () => {
    return (
        <header> 

            <div className="containerBrand">
            <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Mesas"
                    itemDos = "Roperos"
                    itemTres = "Sillas"
                    itemCuatro = "Sofa/Sillones"
                />
            </nav>
            
            <div className="containerCart">
                <CartWidget />
            </div>

        </header> 
    )
} 

export default NavBar;