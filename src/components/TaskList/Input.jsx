function Input(props) {
  let input = props.disabled ? (
    <input type={props.type} name={props.name} value={props.value} disabled />
  ) : (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e.target.name, e.target.value)}
    />
  );

  return input;
}

export default Input;
