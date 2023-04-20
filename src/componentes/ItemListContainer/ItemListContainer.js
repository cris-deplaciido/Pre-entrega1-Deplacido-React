import './itemlistcontainer.css'


const ItemListContainer = ({ greeting }) => {
    return (
        <div className="titulo">
            <h3>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer