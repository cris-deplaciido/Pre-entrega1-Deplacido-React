import "./buttondetails.css"

const ButtonDetails = (props) => {
    return (
        <button 
            id="details" 
            style={{ width: "180%"}}
    >{props.txt}</button>
)

}

export default ButtonDetails;