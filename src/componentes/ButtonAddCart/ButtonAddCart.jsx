import { useContext } from "react";
import "./buttonaddcart.css"
import { listCartContext } from "../ProviderContextCart/ProviderContextCart"

const ButtonAddCart =( { id, svg} ) => {

    let {addProduct} = useContext(listCartContext);

    const handlerClick = () => {
        addProduct(id)
    }

    return (
        <button id="AddCart" onClick={handlerClick}>
            <img src={svg} alt=""></img>
        </button>

    );
}

export default ButtonAddCart;