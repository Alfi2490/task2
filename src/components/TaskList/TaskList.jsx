import React, {useState} from 'react';
import ItemForm from './ItemForm';
import './TaskList.css';

function TaskList() {

    const [items, setItems] = useState([
        {name: 'Banana', type: 'Fruit', unit:'kg', amount: '2', price: '5'},
        {name: 'Keyboard', type: 'Electronic', unit:'thing', amount: '4', price: '8'},
        {name: 'Sunglasses', type: 'Accesoares', unit:'thing', amount: '6', price: '15'},
        {name: 'Monitor', type: 'Electronic', unit:'thing', amount: '1', price: '50'},
      ]);

    const forms =[];

    function onRemove(itemName) {
        const index = items.findIndex(item => item.name === itemName);
        let [...tmp] = items;
        tmp.splice(index,1);
        setItems(tmp);
    };

    function onSubmit(id, itemEdited) {

        if (itemEdited.name === '' || itemEdited.type === '' || itemEdited.unit === '' || itemEdited.amount === '' || itemEdited.price === '') {
            alert('Fill all inputs');
            return;
        };
        
        const index = items.findIndex(item => item.name === id);       
        let [...tmp] = items;
        tmp.splice(index, 1 , itemEdited);
        setItems(tmp);
                             
    }

    function onAdd() {   
        const index = items.findIndex(item => item.name === '' || item.type === '' || item.unit === '');
        if (index !== -1) {
            alert('Fill and Submit New Item!');
            return
        }     
        let [...tmp] = items;
        const newItem = {name: '', type: '', unit:'', amount: '0', price: '0'}
        tmp.push(newItem);
        setItems(tmp);
    }

    items.forEach(item => {
        forms.push(<ItemForm 
            key={item.name}
            id={item.name} 
            item={item} 
            onRemove={onRemove}
            onSubmit={onSubmit} />)
    });

    return <div>
        {forms}
        <button 
            className="AddNewItemButton"
            onClick={() => onAdd()}>Add new Item</button>
    </div>
}

export default TaskList;