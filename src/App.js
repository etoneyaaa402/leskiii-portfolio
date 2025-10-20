import React from 'react';
import './App.css'; 

import Header from './components/Header';
import About from './components/About';
import MainInfo from './components/MainInfo';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Project from './pages/Project';
import Project2 from './pages/Project2';
import { Routes, Route } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton';

function Home() {
  return (
    <div className="App">
      <Header />
      <About />
      <MainInfo />
      <h2  id='experience' style={{ marginLeft: '30px' }}>опыт__</h2>
      <Experience />
      <Portfolio />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
        <Route path="/project2" element={<Project2 />} />
    </Routes>
  );
}

export default App;