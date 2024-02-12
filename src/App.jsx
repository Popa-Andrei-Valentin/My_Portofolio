import Jumbotron from "./components/Jumbotron/Jumbotron.jsx";
import './App.css'
import ToggleBtn from "./components/ToggleBtn/ToggleBtn.jsx";

function App() {
  return (
    <>
        <div className="root-content">
            <ToggleBtn />
            <Jumbotron />
        </div>
    </>
  )
}

export default App
