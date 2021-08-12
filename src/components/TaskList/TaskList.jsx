import React, {useState} from 'react';
import ItemForm from './ItemForm';

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
    }

    items.forEach(item => {
        forms.push(<ItemForm key={item.name} item={item} onRemove={onRemove}/>)
    });

    return <div>
        {forms}
    </div>
}

export default TaskList;