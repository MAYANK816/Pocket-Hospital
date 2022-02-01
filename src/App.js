import React from 'react';
import Navbar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Contact from './Components/Contact';
import OxygenCylinder from './Features/OxygenCylinder';
import Donation from './Features/Donation'
import NeedAmbulance from './Features/NeedAmbulance'
import NeedDoctor from './Features/NeedDoctor'
import NeedDietitian from './Features/NeedDietitian'
import FindHospitalBed from './Features/FindHospitalBed'
import FindMedicine from './Features/FindMedicine'

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
          <Route exact path="/Find_Oxygen" element={ <OxygenCylinder />}/> 
          <Route exact path="/Find_Doctor" element={ <NeedDoctor />}/> 
          <Route exact path="/Find_Medicine" element={ <FindMedicine />}/> 
          <Route exact path="/Find_Bed" element={ <FindHospitalBed />}/> 
          <Route exact path="/Donation" element={ <Donation />}/> 
          <Route exact path="/Need_Ambulance" element={ <NeedAmbulance />}/> 
          <Route exact path="/Need_Dietitian" element={ <NeedDietitian />}/> 
      </Routes>
    <Footer/>
      </div>
    </Router>

  </>;
};

export default App;
