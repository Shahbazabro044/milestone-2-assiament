"use client";  // Place it at the top

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";


export default function Homepage() {
  return (
    <>
      <div>
        <Navbar />
       <Home/>
       <About/>
       <Services/>
       <Contact/>
      </div>
    </>
  );
}

      
 