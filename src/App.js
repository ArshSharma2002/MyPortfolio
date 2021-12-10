import "./App.css";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Perks from "./components/Perks";
import Resume from "./components/Resume";

function App() {

  const [progress, setProgress] = useState(0)

  return (

    <div>
      <LoadingBar
        color='#2867b2'
        height='4px'
        shadow='true'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar setProgress={setProgress}/>
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
