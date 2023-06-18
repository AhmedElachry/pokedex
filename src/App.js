import "./App.css";
import PokeGame from "./components/PokeGame";
function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="pokedex">
        <PokeGame />
      </div>
    </div>
  );
}

export default App;
