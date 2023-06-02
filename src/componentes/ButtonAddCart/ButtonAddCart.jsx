import { useContext } from "react";
import "./buttonaddcart.css"
import { listCartContext } from "../ProviderContextCart/ProviderContextCart"

const ButtonAddCart = ({id}) => {

    let {addProduct} = useContext(listCartContext)

    return (
            <button id="AddCart" onClick={ () => addProduct(id)}>
                <p>🛒</p>
            </button>
        
    )
};

export default ButtonAddCart;