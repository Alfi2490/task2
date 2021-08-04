import './App.css';
import Clock from './components/Clock/Clock';
import Toggle from './components/Toggle/Toggle';
import LoginControl from './components/LoginControl/LoginControl';

function App() {
  return (
    <div className="App">
      <Clock />
      <Toggle />
      <LoginControl/>
    </div>
  );
}

export default App;
