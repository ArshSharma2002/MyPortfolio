import "./App.css";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
// import Perks from "./components/Perks";
import Resume from "./components/Resume";

function App() {

  const [progress, setProgress] = useState(0)
  const [modeLabel, setModeLabel] = useState("☀️")

  const toggleMode = () => {
    if (modeLabel === "☀️") {
      setModeLabel("🌙");
      document.getElementById('body').classList.replace("initialBg","darkBg");
      document.getElementById('nav').style.background="rgba(8, 32, 68, 0.5)";
      document.getElementsByClassName('resumeBtn')[0].style.backgroundColor="rgb(14, 27, 61)";
      document.getElementsByTagName("h5")[0].classList.remove("text-muted")
      
      
    } else {
      
      setModeLabel("☀️");
      document.getElementById('body').classList.replace("darkBg","initialBg");
      document.getElementById('nav').style.background="rgba(218,209,228,0.5)";
      document.getElementsByClassName('resumeBtn')[0].style.backgroundColor="#7584ad";
      document.getElementsByTagName("h5")[0].classList.add("text-muted")
      
    }

  };

  return (

    <div>
      <LoadingBar
        color='#2867b2'
        height='4px'
        shadow='true'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar toggleMode={toggleMode} setProgress={setProgress} modeLabel={modeLabel} />
      <Home/>
      <About/>
      {/* <Perks/> */}
      <Resume/>
      <Footer setProgress={setProgress}/>
      {/* <Router>
        <Navbar setProgress={setProgress}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/perks" element={<Perks/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer setProgress={setProgress}/>
      </Router> */}
    </div>
  );
}

export default App;