import React from 'react';
import Navbar from './component/Navbar';
import About from './component/About';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Footer from './component/Footer';
import BackgroundEngine from './component/BackgroundEngine';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackgroundEngine />
      <Footer />
    </>
  );
}

export default App;