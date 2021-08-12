import React, {useState} from 'react';
import ItemForm from './ItemForm';

function TaskList(props) {

    const [items, setItems] = useState(props.items);
    const forms =[];

    items.forEach(item => {
        forms.push(<ItemForm key={item.name} item={item}/>)
    });

    return <div>
        {forms}
    </div>
}

export default TaskList;