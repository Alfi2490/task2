import './App.css';
import Clock from './components/Clock/Clock';
// import Toggle from './components/Toggle/Toggle';
// import LoginControl from './components/LoginControl/LoginControl';
// import Banner from './components/Banner/Banner';
// import Reservation from './components/Reservation/Reservation';
// import Calculator from './components/Claculator/Calculator';
import SignUpDialog from './components/SingUpDialog/SingUpDialog';

function App() {
  return (
    <div className="App">
      <Clock />
      {/* <Toggle /> */}
      {/* <LoginControl/> */}
      {/* <Banner /> */}
      {/* <Reservation /> */}
      {/* <Calculator /> */}
      <SignUpDialog/>
    </div>
  );
}

export default App;
