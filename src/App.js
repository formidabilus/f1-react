import "./App.css";
import Card from "./components/Card/Card";
import { mockData } from "./mockData/mockData";

function App() {
  return (
    <div className="App">
      <Card cards={mockData} />
    </div>
  );
}

export default App;
