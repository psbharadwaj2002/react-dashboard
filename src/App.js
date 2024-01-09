import MainDisplay from "./components/MainDisplay";
import Sidebar from "./components/Sidebar";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainDisplay />
    </div>
  );
}

export default App;
