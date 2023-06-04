import fetchSimulation from "../../utilis/fetchSimulation";
import productos from "../../utilis/products";
import { useState, useEffect } from "react";
import CardItem from "../CardItem/CardItem"
import "../ContainerCardItems/containerCardItems.css"
import { useParams } from "react-router-dom";
import  ClipLoader  from "react-spinners/ClipLoader";


const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );
    let {idCategory} = useParams()
    
    useEffect(() => {

            setDatos( [] )

            if (idCategory == undefined) {
                fetchSimulation(productos, 2000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            } else {
                fetchSimulation(productos.filter(filter => filter.type == idCategory), 2000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            }
                
    }, [idCategory])


    return(
        <div className="containerCardItems">
            {
                (datos.length === 0 ) ? <div className="containerSpinner"> <ClipLoader color="rgb(12, 82, 151)" /> </div>
                : datos.map( product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.firtsImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCardItems;