import './App.css';
import Clock from './components/Clock/Clock';
import Toggle from './components/Toggle/Toggle';
import LoginControl from './components/LoginControl/LoginControl';
import Banner from './components/Banner/Banner';
import Reservation from './components/Reservation/Reservation';
import Calculator from './components/Claculator/Calculator';

function App() {
  return (
    <div className="App">
      <Clock />
      <br/>
      <Toggle />
      <br/>
      <LoginControl/>
      <br/>
      <Banner />
      <br/>
      <Reservation />
      <br/>
      <Calculator />
    </div>
  );
}

export default App;
