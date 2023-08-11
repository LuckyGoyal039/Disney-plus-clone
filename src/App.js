import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
