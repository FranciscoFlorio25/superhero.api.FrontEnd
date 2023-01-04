import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddHero from "./Component/AddHero";
import Hero from './Component/Hero';
import HeroList from './Component/HeroList';

function App() {
  return (
    <div>
      <nav  className="navbar navbar-expand navbar-dark bg-dark">
         <a href= "/SuperHero" className="navbar-brand">Super Heros</a>
         <div className='nav-item'>
          <li className="nav-item">
            <Link to={"/SuperHero"} className="nav-link"> Add </Link>
          </li>
         </div>
      </nav> 
      <div className="container mt-3">
        <Routes>
          <Route path="/" element= {<HeroList/>} />
          <Route path="/Heros" element={<HeroList/>} />
          <Route path="/add" element={<AddHero/>} />
          <Route path="/Hero/:id" element={<Hero/>} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
