import React, {useState} from "react";
import Input from "./Input";
import './ItemForm.css'

function ItemForm(props) {

    const [item, setItem] = useState(props.item);

    const keys = Object.keys(item);
    const values = Object.values(item);
    let inputs = [];
    
    for (let i = 0; i < keys.length; i++){
        inputs.push(<Input key={i} name={keys[i]} placeholder={values[i]} disabled/>)
    }

    return <form className="Form">
        {inputs}
        <p>{parseFloat(item.amount) * parseFloat(item.price)}</p>
        <button>X</button>
        <button>+</button>
    </form>
}

export default ItemForm;