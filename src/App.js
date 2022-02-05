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
        <Route exact path='/' element={<About/>} />
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
