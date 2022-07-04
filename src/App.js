import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <MainDash/>
      <Sidebar/>
     </div>
    </div>
  );
}

export default App;
