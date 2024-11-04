// src/App.jsx
import './App.css';
import TourList from "./TourList";
import { tours } from "./toursData.js";
import "./App.css";

function App() {
  return (
    <main>
      <TourList tours={tours} />
    </main>
  );
}

export default App;