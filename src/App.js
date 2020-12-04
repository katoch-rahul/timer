
import './App.css';
import Timer from './timer.jsx'
import logo from "./logo.svg"

function App() {
  return (<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      <Timer></Timer>
    </p>
    
  </header>
</div>
  );
}

export default App;
