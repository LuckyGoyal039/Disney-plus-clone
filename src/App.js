import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/Dashboard";
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
