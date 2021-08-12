import React from 'react';

class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items
        };
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => <div key={item.name}>
                    <div>{item.name}</div>
                    <div>{item.type}</div>
                    <div>{item.unit}</div>
                    <div>{item.amount}</div>
                    <div>{item.price}</div>
                    <div>{parseFloat(item.amount) * parseFloat(item.price)}</div>
                    <button>X</button>
                    <button>+</button>
                </div>)}
            </div>
        )
    }
}

export default TaskList;