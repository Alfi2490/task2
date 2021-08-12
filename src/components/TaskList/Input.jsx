function Input(props) {

    let input = props.disabled 
    ? <input type="text" name={props.name} placeholder={props.placeholder} disabled/> 
    : <input type="text" name={props.name} placeholder={props.placeholder}/>
    
    return input        
}

export default Input;