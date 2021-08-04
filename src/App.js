import './App.css';
import Clock from './components/Clock/Clock';
import Toggle from './components/Toggle/Toggle';
import LoginControl from './components/LoginControl/LoginControl';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Clock />
      <Toggle />
      <LoginControl/>
      <Banner />
    </div>
  );
}

export default App;
