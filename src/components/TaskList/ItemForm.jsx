import React, {useState} from "react";
import Input from "./Input";
import './ItemForm.css'

function ItemForm(props) {

    const [item, setItem] = useState(props.item);

    const [edit, setEdit] = useState(item.name !== '' ? false : true);

    const keys = Object.keys(item);
    const values = Object.values(item);
    let inputs = [];
    let type = 'text';

    function changeItem(keyName,newValue) {
        let {...tmp} = item;        
        Object.defineProperty(tmp, `${keyName}`, {value: `${newValue}`});
        setItem(tmp);
    }
    
    if(edit === false){
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === 'amount') {
                    type = 'number';
                }
                if (keys[i] === 'price') {
                    type = 'number';
                }
                inputs.push(<Input key={i} type={type} name={keys[i]} value={values[i]} disabled />)
        }
    }    

    if(edit === true) {
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === 'amount') {
                    type = 'number';
                }
                if (keys[i] === 'price') {
                    type = 'number';
                }
                inputs.push(<Input key={i} type={type} name={keys[i]} value={values[i]} onChange={changeItem} />)
        }
    }

    const defaultButtons = <>
        <button onClick={() => props.onRemove(item.name)}>X</button>
        <button onClick={() => setEdit(true)}>+</button>
    </>;

    const confirmButton = <>
        <button onClick={(e) => {
                props.onSubmit(e.target.parentElement.id,item);
                if (item.name === '' || item.type === '' || item.unit === '' || item.amount === '' || item.price === '' ) {
                        return
                    }
                setEdit(false); 
            }
        }>Submit</button>
    </>;

    return <form onSubmit={e => e.preventDefault()} className="Form" id={props.id} draggable>
        {inputs}
        <p className="Total">
            {item.amount === '' || item.price === '' ? 0 : (parseFloat(item.amount) * parseFloat(item.price))}
            {}
            </p>
        {edit === false ? defaultButtons : confirmButton}
        
    </form>
}

export default ItemForm;