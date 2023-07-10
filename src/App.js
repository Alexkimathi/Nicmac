
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courselist" element={<Home />}></Route>
          <Route path="/teamlist" element={<Home />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
