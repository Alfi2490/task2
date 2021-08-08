function FancyBorder(props) {
    return (
        <div style={{border: `5px solid ${props.color}`}}>
            {props.children}
        </div>
    )
}

export default FancyBorder;