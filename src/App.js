import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AnimatedDotsBackground from './components/AnimatedDotsBackground';

function App() {
  return (
    <div className="App">
      <AnimatedDotsBackground />
      <Header />
      <Hero />
      <About />
      <Members />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
