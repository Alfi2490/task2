import './App.css';
import Clock from './components/Clock/Clock';
// import Toggle from './components/Toggle/Toggle';
// import LoginControl from './components/LoginControl/LoginControl';
// import Banner from './components/Banner/Banner';
// import Reservation from './components/Reservation/Reservation';
// import Calculator from './components/Claculator/Calculator';
// import SignUpDialog from './components/SingUpDialog/SingUpDialog';
// import FilterableProductTable from './components/FilterableProductTable/FilterableproductTable';

function App() {
  return (
    <div className="App">
      <Clock />
      {/* <Toggle /> */}
      {/* <LoginControl/> */}
      {/* <Banner /> */}
      {/* <Reservation /> */}
      {/* <Calculator /> */}
      {/* <SignUpDialog/> */}
      {/* < FilterableProductTable products={PRODUCTS}/> */}
    </div>
  );
}

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

const ITEMS = [
  {name: 'Banana', type: 'Fruit', unit:'kg', amount: '2', price: '5'},
  {name: 'Keyboard', type: 'Electronic', unit:'thing', amount: '4', price: '8'},
  {name: 'Sunglasses', type: 'Accesoares', unit:'thing', amount: '6', price: '15'},
  {name: 'Monitor', type: 'Electronic', unit:'thing', amount: '1', price: '50'},
]

export default App;
