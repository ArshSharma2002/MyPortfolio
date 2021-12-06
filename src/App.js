import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Perks from "./components/Perks";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/perks" element={<Perks />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
