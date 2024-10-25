import React, { useEffect } from "react";
import Home from "./components/pages/Home";
import { About } from "./components/pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
