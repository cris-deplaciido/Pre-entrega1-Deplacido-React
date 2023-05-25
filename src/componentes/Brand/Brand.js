import brand from "../../img/rago-logo-black.webp";
import { Link } from "react-router-dom"

const Brand = () => {
    return (
        <Link to="/">
            <img src={brand} alt="Rago" title="Rago"></img>
        </Link>
        )
}

export default Brand;