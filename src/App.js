import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import { Landingpage } from "./pages/Landingpage/Landingpage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {["/", "/login"].map((path, index) =>
            <Route path={path} element={<Landingpage />} key={index} />
          )}
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
