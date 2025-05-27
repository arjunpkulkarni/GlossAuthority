import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Packages from './components/Packages/Packages';
import FAQ from './components/FAQ/FAQ';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import VeteranOwnedBadge from './components/VeteranOwnedBadge/VeteranOwnedBadge';
function App() {
  return (
    <div className="App">
      <VeteranOwnedBadge />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <ImageGallery />
      </div>
      <div id="pricing">
        <Packages />
      </div>
      <FAQ />
      <div id="schedule">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default App;
