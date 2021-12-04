import './App.css';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Perks from './components/Perks';

function App() {
  return (
        <div>
          <Navbar/>
          <Home/>
          <About/>
          <Perks/>
        </div>
  );
}

export default App;
