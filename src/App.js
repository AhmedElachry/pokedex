import "./App.css";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="pokedex">
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
