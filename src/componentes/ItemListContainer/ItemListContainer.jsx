
import './itemlistcontainer.css';
import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {
    return (
        <ul>
            <li>
                <Link to={"/"}>
                    Inicio
                </Link>
            </li>


            <li>
                <Link to="category/mesas" >
                    {props.itemUno}
                </Link>
            </li>

            <li>
                <Link to="category/roperos">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/sillas">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/sillones">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
        
        
    )
}

export default ItemListContainer;