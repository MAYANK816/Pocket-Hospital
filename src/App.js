import React from 'react';
import Navbar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
const App = () => {
  return <>
 
    <Router>
      <div>
      <Navbar/>
      <Routes>
     <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/contact" element={ <Contact />}/> 
      </Routes>
    <Footer/>
      </div>
    </Router>

  </>;
};

export default App;
