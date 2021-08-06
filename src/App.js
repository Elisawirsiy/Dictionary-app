import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <a href="/" className="external-link">
            Open-source code{" "}
          </a>
          by Elizabeth Wirsiy
        </footer>
      </div>
    </div>
  );
}

export default App;
