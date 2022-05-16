import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom";

import NavbarComp from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Scoutisme from './components/Scoutisme';
import Benevolatci from './components/Benevolatci';
import SemaineInter from './components/SemaineInter';
import Dev from './components/Dev';
import Formations from './components/Formations';
import Conferences from './components/Conferences';
import Hardware from './components/Hardware';

function App() {
  return (
    <>
      
      <NavbarComp />
      <BrowserRouter>
      <Routes>
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/experiences' element={<Experiences/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/portfolio' element={<Portfolio/>} />
        <Route exact path='/scoutisme' element={<Scoutisme/>} />
        <Route exact path='/benevolatci' element={<Benevolatci/>} />
        <Route exact path='/semaineinter' element={<SemaineInter/>} />
        <Route exact path='/dev' element={<Dev/>} />
        <Route exact path='/formations' element={<Formations/>} />
        <Route exact path='/conferences' element={<Conferences/>} />
        <Route exact path='/hardware' element={<Hardware/>} />
        <Route exact path='/' element={<About/>} />
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
