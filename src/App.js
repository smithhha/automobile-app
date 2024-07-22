import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import
import Register from "./Components/Registration/Register ";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
